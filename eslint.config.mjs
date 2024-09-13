import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }
    ,rules:{
      // Example TypeScript rule: Warn about unused variables
      "@typescript-eslint/no-unused-vars": "error",

      // Example rule: Disallow the use of `var` and enforce `let` or `const`
      "no-var": "warn",
    }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];


