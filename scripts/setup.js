#!/usr/bin/env node

/**
 * setup.js
 * Project bootstrap script:
 *  - Installs Husky & enables Git hooks
 *  - Replaces __APP_NAME__ placeholders across the project
 *  - Patches app.json and package.json
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = process.cwd();
const filesToPatch = ['app.json', 'package.json'];
const ignoredDirs = ['node_modules', '.git', 'dist', 'build'];

/** ----------------------------
 * Utilities
 * ---------------------------- */
function getAppName() {
  try {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'),
    );
    return pkg.name || null;
  } catch {
    return null;
  }
}

/** ----------------------------
 * Step 1 — Setup Husky
 * ---------------------------- */
function setupHusky() {
  try {
    if (!fs.existsSync('.git')) {
      console.log('Initializing Git...');
      execSync('git init', { stdio: 'inherit' });
    }

    console.log('🐶 Setting up Husky...');
    execSync('npx husky install', { stdio: 'inherit' });

    const huskyDir = path.join(projectRoot, '.husky');
    if (!fs.existsSync(huskyDir)) {
      fs.mkdirSync(huskyDir);
    }

    const preCommitHook = path.join(huskyDir, 'pre-commit');
    if (!fs.existsSync(preCommitHook)) {
      fs.writeFileSync(
        preCommitHook,
        `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpm run lint\n`,
        'utf8',
      );
      fs.chmodSync(preCommitHook, '755');
      console.log('✅ Created Husky pre-commit hook');
    }
  } catch (error) {
    console.warn('⚠️ Failed to configure Husky:', error.message);
  }
}

/** ----------------------------
 * Step 2 — Patch key files
 * ---------------------------- */
function patchMainFiles(appName) {
  filesToPatch.forEach((file) => {
    const filePath = path.join(projectRoot, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/__APP_NAME__/g, appName);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`🔧 Patched ${file}`);
  });
}

/** ----------------------------
 * Step 3 — Replace placeholders everywhere
 * ---------------------------- */
function replacePlaceholdersRecursively(dir, appName) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (ignoredDirs.includes(entry.name)) continue;
      replacePlaceholdersRecursively(fullPath, appName);
    } else if (entry.isFile()) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('__APP_NAME__')) {
          const updated = content.replace(/__APP_NAME__/g, appName);
          fs.writeFileSync(fullPath, updated, 'utf8');
          console.log(`✅ Updated: ${path.relative(projectRoot, fullPath)}`);
        }
      } catch {
        // skip binary files
      }
    }
  }
}

/** ----------------------------
 * Main
 * ---------------------------- */
(async function runSetup() {
  const appName = getAppName();

  if (!appName) {
    console.error('❌ Could not determine app name from package.json.');
    process.exit(1);
  }

  console.log(`🚀 Running setup for "${appName}"...`);

  setupHusky();
  patchMainFiles(appName);
  replacePlaceholdersRecursively(projectRoot, appName);

  console.log('\n✨ Setup complete!');
})();
