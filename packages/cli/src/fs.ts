import { isAbsolute, dirname, resolve } from 'node:path'
import fs from 'fs-extra'

const { ensureDir, readJSON, writeJSON } = fs

export function resolvePath(value: string): string {
  return isAbsolute(value) ? value : resolve(process.cwd(), value)
}

export async function read<T = any>(file: string): Promise<T> {
  return (await readJSON(resolvePath(file))) as T
}

export async function write(file: string, data: unknown): Promise<void> {
  const path = resolvePath(file)
  await ensureDir(dirname(path))
  await writeJSON(path, data)
}
