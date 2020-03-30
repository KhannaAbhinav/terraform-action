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
  options.failOnStdErr = true

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
  return options
}

async function executeApply(inputs: ApplyOptions): Promise<{}> {
  const args = ['apply']

  if (Boolean(inputs.compactWarnings) === true) args.push('-compact-warnings')

  if (inputs.backup) args.push(`-backup=${inputs.backup}`)

  if ('input' in inputs) args.push(`-input=${Boolean(inputs.input)}`)

  if ('lock' in inputs) args.push(`-lock=${Boolean(inputs.lock)}`)

  if (inputs.lockTimeout) args.push(`-lock-timeout=${+inputs.lockTimeout}`)

  if (Boolean(inputs.noColor) === true) args.push('-no-color')

  if (Boolean(inputs.autoApprove) === true) args.push('-auto-approve')

  if (inputs.parallelism) args.push(`-parallelism=${+inputs.parallelism}`)

  if (inputs.refresh) args.push(`-refresh=${Boolean(inputs.refresh)}`)

  if (inputs.state) args.push(`-state=${inputs.state}`)

  if (inputs.stateOut) args.push(`-state-out=${inputs.stateOut}`)

  if (inputs.target) args.push(`-target=${inputs.target}`)

  if (inputs.var) {
    const varMap = new Map(Object.entries(inputs.var))
    for (const key of varMap.keys()) {
      args.push(`-var '${key}=${varMap.get(key)}'`)
    }
  }

  if (inputs.varFile) args.push(`-var-file=${inputs.varFile}`)

  if (inputs.dirOrPlan) args.push(inputs.dirOrPlan)
  await exec.exec('terraform', args, setOptions(inputs))
  return inputs
}

async function executeConsole(inputs: ConsoleOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeDestroy(inputs: DestroyOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeEnv(inputs: EnvOptions): Promise<{}> {
  core.info('This command is deprecated. Please use workspace command')
  return inputs
}
async function executeFmt(inputs: FmtOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeGet(inputs: GetOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeGraph(inputs: GraphOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeImport(inputs: ImportOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeInit(inputs: InitOptions): Promise<{}> {
  const args = ['init']

  if ('input' in inputs) args.push(`-input=${Boolean(inputs.input)}`)

  if ('lock' in inputs) args.push(`-lock=${Boolean(inputs.lock)}`)

  if (inputs.lockTimeout) args.push(`-lock-timeout=${+inputs.lockTimeout}`)

  if (inputs.noColor && Boolean(inputs.noColor) === true) args.push('-no-color')

  if (inputs.upgrade && Boolean(inputs.upgrade) === true) args.push('-upgrade')

  if (inputs.dir) args.push(inputs.dir)

  await exec.exec('terraform', args, setOptions(inputs))
  return inputs
}
async function executeOutput(inputs: OutputOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executePlan(inputs: PlanOptions): Promise<{}> {
  const args = ['plan']

  if (Boolean(inputs.compactWarnings) === true) args.push('-compact-warnings')

  if (Boolean(inputs.destroy) === true) args.push('-destroy')

  if (Boolean(inputs.detailedExitCode) === true) args.push('-detailed-exitcode')

  if ('input' in inputs) args.push(`-input=${Boolean(inputs.input)}`)

  if ('lock' in inputs) args.push(`-lock='${Boolean(inputs.lock)}`)

  if (inputs.lockTimeout) args.push(`-lock-timeout=${+inputs.lockTimeout}`)

  if (Boolean(inputs.noColor) === true) args.push('-no-color')

  if ('out' in inputs) args.push(`-out='${inputs.out}'`)

  if (inputs.parallelism) args.push(`-parallelism=${+inputs.parallelism}`)

  if (inputs.refresh) args.push(`-refresh=${Boolean(inputs.refresh)}`)

  if (inputs.state) args.push(`-state='${inputs.state}'`)

  if (inputs.target) args.push(`-target='${inputs.target}'`)

  if (inputs.var) {
    const varMap = new Map(Object.entries(inputs.var))
    for (const key of varMap.keys()) {
      args.push(`-var '${key}=${varMap.get(key)}'`)
    }
  }

  if (inputs.varFile) args.push(`-var-file='${inputs.varFile}'`)

  if (inputs.dir) args.push(`'${inputs.dir}'`)

  await exec.exec('terraform', args, setOptions(inputs))

  return inputs
}

async function executeProviders(inputs: ProvidersOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeRefresh(inputs: RefreshOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeShow(inputs: ShowOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeTaint(inputs: TaintOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeUntaint(inputs: UntaintOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeValidate(inputs: ValidateOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeVersion(inputs: VersionOptions): Promise<{}> {
  await exec.exec('terraform', ['-version'], setOptions(inputs))
  return inputs
}
async function executeWorkspace(inputs: WorkspaceOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function execute012Upgrade(inputs: Upgrade012Options): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeDebug(inputs: DebugOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeForceUnlock(inputs: ForceUnlockOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}
async function executeState(inputs: StateOptions): Promise<{}> {
  core.info('This command is not ready yet. Please check back later.')
  return inputs
}

async function main(): Promise<void> {
  try {
    const terraformCommand = core.getInput('command')

    let terraformInputs = {}
    if (core.getInput('params') || core.getInput('params') !== '') {
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
