import { execSync } from 'child_process';
import fs from 'fs';

if (!fs.existsSync('.git')) {
  console.log('Initializing Git...');
  execSync('git init', { stdio: 'inherit' });
}

console.log('Installing Husky...');
execSync('npx husky install', { stdio: 'inherit' });

if (!fs.existsSync('.husky/pre-commit')) {
  console.log('Adding pre-commit hook...');
  execSync('npx husky add .husky/pre-commit "npx lint-staged"', {
    stdio: 'inherit',
  });
}

console.log('Template setup complete ✅');
