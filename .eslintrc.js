module.exports = {
  // extends: [
  //   'standard-with-typescript'
  //   // "plugin:react/recommended",
  //   // "plugin:@typescript-eslint/recommended"
  // ],
  // parserOptions: {
  //   project: './tsconfig.json'
  // },
  // rules: {
  //   '@typescript-eslint/explicit-function-return-type': 'off'
  // }

  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "no-empty-pattern": "off",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    // quotes: ["error", "single"],
    // semi: ["error", "never"],
  },
};
