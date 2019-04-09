module.exports = {
  extends: ["airbnb", "plugin:react/recommended"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "indent": [2, 4], // 4 spaces for indentation
    "react/display-name": [false],
    "react/jsx-indent": [2, 4], // 4 spaces for indentation
    "react/jsx-indent-props": [2, 4], // 4 spaces for indentation
    "max-len": [2, 120], // 120 max line length
    "class-methods-use-this": 0, // Needed to return JSX from React component methods
    "compat/compat": 2,
    "function-paren-newline": ["error", "consistent"],
    "no-underscore-dangle": ["error", { "allow": ["__typename"] }],
    "no-process-env": "error", // Use / src / js / helpers / getEnv instead
    "jsx-a11y/anchor-is-valid": ["error", {
        "components": ["Link"],
        "specialLink": ["to"],
        "aspects": ["noHref"]
    }],
    "jsx-a11y/label-has-for": "off", // Deprecated and broken in eslint 6.1.0 Airbnb uses label- has - associated - control instead
    "operator-linebreak": ["error", "after"],
  },
  plugins: ["compat"]
};
