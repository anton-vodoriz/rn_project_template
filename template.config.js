const fs = require('fs');
const path = require('path');

module.exports = {
  // This function is called after the template is copied
  postInstall: async ({ projectRoot, appName }) => {
    console.log(`Running post-install script for ${appName}...`);

    // Files to replace placeholders
    const filesToPatch = ['app.json', 'package.json'];

    filesToPatch.forEach((file) => {
      const filePath = path.join(projectRoot, file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/__APP_NAME__/g, appName);
      fs.writeFileSync(filePath, content, 'utf8');
    });

    console.log(`App name "${appName}" inserted successfully!`);
  },

  // Optional: if you want to skip some dependencies installation
  // installDependencies: true,
};
