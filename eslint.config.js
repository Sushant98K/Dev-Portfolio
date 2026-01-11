import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser } 
  },
  pluginReact.configs.flat.recommended,
  {
    // Custom rules to disable unnecessary warnings
    rules: {
      // Not needed in React 17+ with new JSX transform
      "react/react-in-jsx-scope": "off",
      
      // Disable prop-types validation (not using PropTypes)
      "react/prop-types": "off",
      
      // Allow apostrophes and quotes in JSX text
      "react/no-unescaped-entities": "off",
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
]);
