import * as core from '@actions/core'
import {readJsonSync} from 'fs-extra'

async function run(): Promise<void> {
  try {
    const arr = []
    core.debug(new Date().toTimeString())

    const f: string = core.getInput('files')
    const files = f.split('\n')

    core.debug(`input files: ${f}`)

    for (const file of files) {
      core.debug(`read file: ${file}`)
      const json = readJsonSync(file)
      arr.push(json)
    }

    core.debug(new Date().toTimeString())

    core.setOutput('json', arr)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
