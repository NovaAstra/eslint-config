export async function interopDefault<T>(module: Promise<T> | T): Promise<T> {
  try {
    let resolved = await module

    if (typeof resolved === 'object' && resolved !== null) {
      if ('default' in resolved && Object.keys(resolved).length === 1) {
        let defaultExport = (resolved as { default: unknown }).default as T

        return defaultExport ?? resolved;
      }

      return resolved
    }

    return resolved
  } catch (error) {
    throw new Error(`Failed to import module: ${error instanceof Error ? error.message : String(error)}`);
  }
}