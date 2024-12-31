import type { FlatESLintConfig } from 'eslint-define-config'

export type ESLintConfig = FlatESLintConfig;

export function createConfig(
  config: ESLintConfig | ESLintConfig[] = []
): ESLintConfig[] {
  const configs: ESLintConfig[] = [
  ]

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}