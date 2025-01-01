import { GLOB_EXCLUDE } from "../globs"

export async function ignores(ignores: string[] = []) {
  return {
    ignores: [
      ...GLOB_EXCLUDE,
      ...ignores
    ],
    name: "@sphere/ignores"
  }
}