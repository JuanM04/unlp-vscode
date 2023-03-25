import { readFile, writeFile } from 'node:fs/promises'

import { globby } from 'globby'
import { load } from 'js-yaml'

async function main() {
  const sources = await globby('{snippets,syntaxes}/*.y?(a)ml')

  for (const source of sources) {
    const file = await readFile(source, 'utf-8')
    const json = load(file)
    const target = source.replace(/ya?ml$/, 'json')
    await writeFile(target, JSON.stringify(json))
  }
}

main().catch(console.error)
