import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {
    languageOptions: { globals: globals.browser },
     rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      'no-console': 'off'
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
];