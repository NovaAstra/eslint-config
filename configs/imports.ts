import EslintImportPlugin from "eslint-plugin-import-x"
import { createConfig } from "../createConfig"



export const imports = createConfig(() => ({
  plugins: {
    'import-x': EslintImportPlugin,
  },
  rules: {
    'import-x/no-unresolved': 'error',
    'import-x/named': 'error',
    'import-x/namespace': 'error',
    'import-x/default': 'error',
    'import-x/export': 'error',

    'import-x/no-named-as-default': 'warn',
    'import-x/no-named-as-default-member': 'warn',
    'import-x/no-duplicates': 'warn',
  }
}))