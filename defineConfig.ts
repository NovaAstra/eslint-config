import type { FlatESLintConfig } from 'eslint-define-config'
import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore"
import { regexp } from "./configs/index.js"

export type ESLintConfig = FlatESLintConfig;

export interface ESLintOptions {
  gitignore?: boolean | FlatGitignoreOptions;
}

export function defineConfig(
  config: ESLintConfig | ESLintConfig[] = []
): ESLintConfig[] {
  const configs: ESLintConfig[] = [
    ...regexp
  ]

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}