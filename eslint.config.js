import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    ignores: ["node_modules/", "dist/", "docs/"],
  },
];
