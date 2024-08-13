import tseslint from "typescript-eslint";
import noDevtoolPlugin from "./dist/eslint-plugin-no-devtool.cjs";
import parser from "@typescript-eslint/parser";

export default tseslint.config({
  languageOptions: {
    parser,
    parserOptions: {
      project: "./tsconfig.json",
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        project: "./tsconfig.json",
      },
    },
  },
  files: ["**/*.tsx"],
  plugins: {
    noDevtool: noDevtoolPlugin.default || noDevtoolPlugin,
  },
  rules: {
    "noDevtool/no-devtool": "error",
  },
});
