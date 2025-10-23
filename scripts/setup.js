const fs = require("fs");
const path = require("path");

const projectName = process.env.npm_config_name || process.argv[2] || "MyApp";
const displayName = projectName;

// Files to replace placeholders
const files = [
  "app.json",
  "package.json",
  "android/app/src/main/res/values/strings.xml",
  "ios/MyTemplate/Info.plist",
];

files.forEach((file) => {
  const filePath = path.join(__dirname, "..", file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, "utf8");
  content = content.replace(/__APP_NAME__/g, projectName);
  content = content.replace(/__APP_DISPLAY_NAME__/g, displayName);
  fs.writeFileSync(filePath, content);
});

console.log(`✅ Template setup complete for ${projectName}`);
