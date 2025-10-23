const fs = require('fs');
const path = require('path');

const appName = process.env.npm_package_name || process.argv[2] || '__APP_NAME__';

const filesToPatch = ['app.json', 'package.json'];

filesToPatch.forEach((file) => {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/__APP_NAME__/g, appName);
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`App name "${appName}" replaced successfully!`);
