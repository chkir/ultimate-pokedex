const path = require("path");
const { readdirSync, moveSync } = require("fs-extra");

const DIR = path.join(__dirname, "../../data/version-group");

const files = readdirSync(DIR);

for (const fileName of files) {
  const newFileName = `${fileName.split("-")[0]}.json`;
  moveSync(path.join(DIR, fileName), path.join(DIR, newFileName));
}
