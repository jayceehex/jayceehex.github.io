import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {
    name: "Global eslint config",
    files: "src/**/*.{ts,tsx,js,jsx}",
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];