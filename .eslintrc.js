module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // If using React
    "plugin:@typescript-eslint/recommended", // If using TypeScript
    "prettier", // If using Prettier
  ],
  parser: "@typescript-eslint/parser", // If using TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // If using React
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react", // If using React
    "@typescript-eslint", // If using TypeScript
    "prettier", // If using Prettier
  ],
  settings: {
    react: {
      version: "detect", // If using React
    },
  },
  rules: {
    // General rules
    "no-console": "warn",
    "no-unused-vars": "warn",
    "prefer-const": "error",

    // React specific rules
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    // TypeScript specific rules
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",

    // Prettier specific rules
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5",
        tabWidth: 2,
        semi: true,
        printWidth: 80,
      },
    ],
  },
  overrides: [
    {
      // Special rules for test files
      files: ["**/*.test.js", "**/*.test.tsx"],
      env: {
        jest: true,
      },
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
};
