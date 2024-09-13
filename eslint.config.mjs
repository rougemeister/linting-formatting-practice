import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Example TypeScript rule: Error on unused variables
      "@typescript-eslint/no-unused-vars": "error",

      // Example rule: Disallow the use of `var` and enforce `let` or `const`
      "no-var": "warn",

      // Prettier rules
      "prettier/prettier": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
];