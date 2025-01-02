import { createConfig } from "../createConfig"
import { GLOB_EXCLUDE } from "../globs"

export const ignores = createConfig(
  (ignores: string[] = []) => ({
    ignores: [
      ...GLOB_EXCLUDE,
      ...ignores
    ],
  })
)