import EslintCommentsPlugin from "eslint-plugin-eslint-comments"
import { createConfig } from "../createConfig"

export const comments = createConfig({
  plugins: {
    'eslint-comments': EslintCommentsPlugin,
  },
  rules: {
    // eslint core rules
    "no-inline-comments": "off",
    "no-warning-comments": "error",

    // eslint-plugin-eslint-comments rules
    "eslint-comments/no-aggregating-enable": "error",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    "eslint-comments/disable-enable-pair": [
      "error",
      { "allowWholeFile": true }
    ],
    "eslint-comments/no-use": [
      "error",
      {
        "allow": [
          "eslint-disable",
          "eslint-disable-next-line",
          "eslint-enable",
          "eslint-env",
          "global"
        ]
      }
    ],
  }
})