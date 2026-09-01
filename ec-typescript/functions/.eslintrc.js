const path = require("path");

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      path.resolve(__dirname, "tsconfig.json"),
      path.resolve(__dirname, "tsconfig.dev.json"),
    ],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    ".eslintrc.js",
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["error", "double"],
    "import/no-unresolved": 0,
    indent: ["error", 2],
    "@typescript-eslint/no-var-requires": "off", // Allow require() for CommonJS compatibility
    "require-jsdoc": "off", // JSDoc comments not required
    "new-cap": [
      "error",
      {
        capIsNew: false, // Allow calling functions that start with uppercase
      },
    ],
    "object-curly-spacing": ["error", "always"], // Allow spaces in { imports }
  },
};

