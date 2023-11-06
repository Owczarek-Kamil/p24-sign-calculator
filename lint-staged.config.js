/** @format */

const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
  "**/*.(ts|tsx)": "tsc-files --noEmit",
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.(ts|tsx|js|jsx)": (filenames) => `prettier --write ${filenames.join(" ")}`,
};
