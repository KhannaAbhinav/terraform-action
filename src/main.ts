import * as core from '@actions/core'
// import * as exec from '@actions/exec'

function executeApply(inputs: {}): {} {
  console.log(inputs)
  return {}
}

async function main(): Promise<void> {
  try {
    const terraformCommand = core.getInput('command')

    let terraformInputs = {}
    if (null != core.getInput('params') || core.getInput('params') !== '') {
      terraformInputs = JSON.parse(core.getInput('params'))
    }

    console.debug(`command :  ${terraformCommand}`)
    console.debug(`params :  ${terraformInputs}`)

    switch (terraformCommand) {
      case 'apply':
        executeApply(terraformInputs)
    }
  } catch (error) {
    console.log(error)
    core.setFailed(error.message)
  }
}

main()
