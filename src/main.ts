import * as core from '@actions/core'
import * as exec from '@actions/exec'
import {ExecOptions} from '@actions/exec/lib/interfaces'
import {
  ApplyOptions,
  ConsoleOptions,
  DebugOptions,
  DestroyOptions,
  EnvOptions,
  FmtOptions,
  ForceUnlockOptions,
  GetOptions,
  GraphOptions,
  ImportOptions,
  InitOptions,
  OutputOptions,
  PlanOptions,
  ProvidersOptions,
  RefreshOptions,
  ShowOptions,
  StateOptions,
  TaintOptions,
  UntaintOptions,
  Upgrade012Options,
  ValidateOptions,
  VersionOptions,
  WorkspaceOptions,
  TerraformOptions
} from './typings/interfaces'

function setOptions(inputs: TerraformOptions): ExecOptions {
  let myOutput = ''
  let myError = ''

  const options: ExecOptions = {}
  if (inputs.cwd) {
    options.cwd = inputs.cwd
  }
  options.listeners = {
    stdout: (data: Buffer) => {
      myOutput += data.toString()
    },
    stderr: (data: Buffer) => {
      myError += data.toString()
    }
  }
  core.info(myOutput)
  core.info(myError)
  core.setOutput('commandOutput', myOutput)
  core.setOutput('commandError', myError)
  return options
}

async function executeApply(inputs: ApplyOptions): Promise<{}> {
  await exec.exec('terraform', ['apply', ''], setOptions(inputs))
  return inputs
}

function executeConsole(inputs: ConsoleOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeDestroy(inputs: DestroyOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeEnv(inputs: EnvOptions): {} {
  core.info('This command is deprecated. Please use workspace command')
  return inputs
}
function executeFmt(inputs: FmtOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeGet(inputs: GetOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeGraph(inputs: GraphOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeImport(inputs: ImportOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeInit(inputs: InitOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeOutput(inputs: OutputOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executePlan(inputs: PlanOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeProviders(inputs: ProvidersOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeRefresh(inputs: RefreshOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeShow(inputs: ShowOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeTaint(inputs: TaintOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeUntaint(inputs: UntaintOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeValidate(inputs: ValidateOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeVersion(inputs: VersionOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeWorkspace(inputs: WorkspaceOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function execute012Upgrade(inputs: Upgrade012Options): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeDebug(inputs: DebugOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeForceUnlock(inputs: ForceUnlockOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
function executeState(inputs: StateOptions): {} {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
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

    let terraformOutput = {}

    switch (terraformCommand) {
      case 'apply':
        terraformOutput = executeApply(terraformInputs as ApplyOptions)
        break
      case 'console':
        terraformOutput = executeConsole(terraformInputs as ConsoleOptions)
        break
      case 'destroy':
        terraformOutput = executeDestroy(terraformInputs as DestroyOptions)
        break
      case 'env':
        terraformOutput = executeEnv(terraformInputs as EnvOptions)
        break
      case 'fmt':
        terraformOutput = executeFmt(terraformInputs as FmtOptions)
        break
      case 'get':
        terraformOutput = executeGet(terraformInputs as GetOptions)
        break
      case 'graph':
        terraformOutput = executeGraph(terraformInputs as GraphOptions)
        break
      case 'import':
        terraformOutput = executeImport(terraformInputs as ImportOptions)
        break
      case 'init':
        terraformOutput = executeInit(terraformInputs as InitOptions)
        break
      case 'output':
        terraformOutput = executeOutput(terraformInputs as OutputOptions)
        break
      case 'plan':
        terraformOutput = executePlan(terraformInputs as PlanOptions)
        break
      case 'providers':
        terraformOutput = executeProviders(terraformInputs as ProvidersOptions)
        break
      case 'refresh':
        terraformOutput = executeRefresh(terraformInputs as RefreshOptions)
        break
      case 'show':
        terraformOutput = executeShow(terraformInputs as ShowOptions)
        break
      case 'taint':
        terraformOutput = executeTaint(terraformInputs as TaintOptions)
        break
      case 'untaint':
        terraformOutput = executeUntaint(terraformInputs as UntaintOptions)
        break
      case 'validate':
        terraformOutput = executeValidate(terraformInputs as ValidateOptions)
        break
      case 'version':
        terraformOutput = executeVersion(terraformInputs as VersionOptions)
        break
      case 'workspace':
        terraformOutput = executeWorkspace(terraformInputs as WorkspaceOptions)
        break
      case '0.12upgrade':
        terraformOutput = execute012Upgrade(terraformInputs as Upgrade012Options)
        break
      case 'debug':
        terraformOutput = executeDebug(terraformInputs as DebugOptions)
        break
      case 'force-unlock':
        terraformOutput = executeForceUnlock(terraformInputs as ForceUnlockOptions)
        break
      case 'state':
        terraformOutput = executeState(terraformInputs as StateOptions)
        break

      default:
        core.setFailed('Invalid Command or Command not implemented yet')
    }
    core.setOutput('commandOutput', JSON.stringify(terraformOutput))
  } catch (error) {
    core.info(error)
    core.setFailed(error.message)
  }
}

main()
