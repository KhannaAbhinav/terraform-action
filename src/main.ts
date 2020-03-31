import * as core from '@actions/core'
import * as exec from '@actions/exec'
import {addValueToArgs} from './utils'
import {ExecOptions} from '@actions/exec/lib/interfaces'
import {
  ApplyOptions,
  ConsoleOptions,
  DebugOptions,
  DestroyOptions,
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
      core.setOutput('stdOut', myOutput)
    },
    stderr: (data: Buffer) => {
      myError += data.toString()
      core.setOutput('stdErr', myError)
    }
  }
  return options
}

async function executeApply(inputs: ApplyOptions): Promise<void> {
  let args = ['apply']

  args = addValueToArgs('flag', 'compact-warnings', inputs.compactWarnings, args)
  args = addValueToArgs('string', 'backup', inputs.backup, args)
  args = addValueToArgs('boolean', 'input', inputs.input, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'auto-approve', inputs.autoApprove, args)
  args = addValueToArgs('number', 'parallelism', inputs.parallelism, args)
  args = addValueToArgs('boolean', 'refresh', inputs.refresh, args)
  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('string', 'state-out', inputs.stateOut, args)
  args = addValueToArgs('string', 'target', inputs.target, args)

  if (inputs.var) {
    const varMap = new Map(Object.entries(inputs.var))
    for (const key of varMap.keys()) {
      args = addValueToArgs('flag', 'var', 'true', args)
      args = addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args)
    }
  }

  args = addValueToArgs('string', 'var-file', inputs.varFile, args)
  args = addValueToArgs('noflag', '', inputs.dirOrPlan, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}

async function executeConsole(inputs: ConsoleOptions): Promise<void> {
  let args = ['console']

  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeDestroy(inputs: DestroyOptions): Promise<void> {
  let args = ['destroy']

  args = addValueToArgs('flag', 'compact-warnings', inputs.compactWarnings, args)
  args = addValueToArgs('string', 'backup', inputs.backup, args)
  args = addValueToArgs('boolean', 'input', inputs.input, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'auto-approve', inputs.autoApprove, args)
  args = addValueToArgs('number', 'parallelism', inputs.parallelism, args)
  args = addValueToArgs('boolean', 'refresh', inputs.refresh, args)
  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('string', 'state-out', inputs.stateOut, args)
  args = addValueToArgs('string', 'target', inputs.target, args)

  if (inputs.var) {
    const varMap = new Map(Object.entries(inputs.var))
    for (const key of varMap.keys()) {
      args = addValueToArgs('flag', 'var', 'true', args)
      args = addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args)
    }
  }

  args = addValueToArgs('string', 'var-file', inputs.varFile, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}

async function executeFmt(inputs: FmtOptions): Promise<void> {
  let args = ['fmt']
  args = addValueToArgs('boolean', 'list', inputs.list, args)
  args = addValueToArgs('boolean', 'write', inputs.write, args)

  args = addValueToArgs('flag', 'diff', inputs.diff, args)
  args = addValueToArgs('flag', 'check', inputs.check, args)
  args = addValueToArgs('flag', 'recursive', inputs.recursive, args)

  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeGet(inputs: GetOptions): Promise<void> {
  let args = ['get']

  args = addValueToArgs('flag', 'update', inputs.update, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}

async function executeGraph(inputs: GraphOptions): Promise<void> {
  let args = ['graph']

  args = addValueToArgs('flag', 'draw-cycles', inputs.drawCycles, args)
  args = addValueToArgs('string', 'type', inputs.type, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeImport(inputs: ImportOptions): Promise<void> {
  let args = ['import']

  args = addValueToArgs('string', 'backup', inputs.backup, args)
  args = addValueToArgs('string', 'config', inputs.config, args)
  args = addValueToArgs('boolean', 'input', inputs.input, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)

  args = addValueToArgs('number', 'parallelism', inputs.parallelism, args)

  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('string', 'state-out', inputs.stateOut, args)

  if (inputs.var) {
    const varMap = new Map(Object.entries(inputs.var))
    for (const key of varMap.keys()) {
      args = addValueToArgs('flag', 'var', 'true', args)
      args = addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args)
    }
  }

  args = addValueToArgs('string', 'var-file', inputs.varFile, args)
  args = addValueToArgs('noflag', '', inputs.addressId, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeInit(inputs: InitOptions): Promise<void> {
  let args = ['init']
  args = addValueToArgs('boolean', 'input', inputs.input, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'upgrade', inputs.upgrade, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeOutput(inputs: OutputOptions): Promise<void> {
  let args = ['output']

  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'json', inputs.json, args)
  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('noflag', '', inputs.name, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executePlan(inputs: PlanOptions): Promise<void> {
  let args = ['plan']

  args = addValueToArgs('flag', 'compact-warnings', inputs.compactWarnings, args)
  args = addValueToArgs('flag', 'destroy', inputs.destroy, args)
  args = addValueToArgs('flag', 'detailed-exitcode', inputs.detailedExitCode, args)

  args = addValueToArgs('boolean', 'input', inputs.input, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)

  args = addValueToArgs('string', 'out', inputs.out, args)
  args = addValueToArgs('number', 'parallelism', inputs.parallelism, args)

  args = addValueToArgs('boolean', 'refresh', inputs.refresh, args)

  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('string', 'target', inputs.target, args)

  if (inputs.var) {
    const varMap = new Map(Object.entries(inputs.var))
    for (const key of varMap.keys()) {
      args = addValueToArgs('flag', 'var', 'true', args)
      args = addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args)
    }
  }

  args = addValueToArgs('string', 'var-file', inputs.varFile, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}

async function executeProviders(inputs: ProvidersOptions): Promise<void> {
  let args = ['providers']

  args = addValueToArgs('noflag', '', inputs.configPath, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeRefresh(inputs: RefreshOptions): Promise<void> {
  let args = ['refresh']

  args = addValueToArgs('string', 'backup', inputs.backup, args)
  args = addValueToArgs('flag', 'compact-warnings', inputs.compactWarnings, args)

  args = addValueToArgs('boolean', 'input', inputs.input, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)

  args = addValueToArgs('number', 'parallelism', inputs.parallelism, args)

  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('string', 'state-out', inputs.stateOut, args)
  args = addValueToArgs('string', 'target', inputs.target, args)

  if (inputs.var) {
    const varMap = new Map(Object.entries(inputs.var))
    for (const key of varMap.keys()) {
      args = addValueToArgs('flag', 'var', 'true', args)
      args = addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args)
    }
  }

  args = addValueToArgs('string', 'var-file', inputs.varFile, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeShow(inputs: ShowOptions): Promise<void> {
  let args = ['show']

  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'json', inputs.json, args)
  args = addValueToArgs('noflag', '', inputs.path, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeTaint(inputs: TaintOptions): Promise<void> {
  let args = ['taint']

  args = addValueToArgs('flag', 'allow-missing', inputs.allowMissing, args)
  args = addValueToArgs('string', 'backup', inputs.backup, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)

  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('string', 'state-out', inputs.stateOut, args)

  args = addValueToArgs('noflag', '', inputs.address, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeUntaint(inputs: UntaintOptions): Promise<void> {
  let args = ['untaint']

  args = addValueToArgs('flag', 'allow-missing', inputs.allowMissing, args)
  args = addValueToArgs('string', 'backup', inputs.backup, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)

  args = addValueToArgs('string', 'module', inputs.module, args)
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('string', 'state-out', inputs.stateOut, args)

  args = addValueToArgs('noflag', '', inputs.name, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeValidate(inputs: ValidateOptions): Promise<void> {
  let args = ['validate']
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'json', inputs.json, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeVersion(inputs: VersionOptions): Promise<void> {
  await exec.exec(TERRAFORM_VERSION, ['-version'], setOptions(inputs))
}
async function executeWorkspace(inputs: WorkspaceOptions): Promise<void> {
  let args = ['workspace']

  args = addValueToArgs('noflag', '', inputs.subcommand, args)

  if (inputs.subcommand === 'select') {
    args = addValueToArgs('noflag', '', inputs.name, args)
  }

  if (inputs.subcommand === 'new') {
    args = addValueToArgs('flag', 'state', inputs.state, args)
    args = addValueToArgs('noflag', '', inputs.name, args)
  }

  if (inputs.subcommand === 'delete') {
    args = addValueToArgs('flag', 'force', inputs.force, args)
    args = addValueToArgs('noflag', '', inputs.name, args)
  }

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function execute012Upgrade(inputs: Upgrade012Options): Promise<void> {
  let args = ['0.12upgrade']
  args = addValueToArgs('flag', 'yes', inputs.yes, args)
  args = addValueToArgs('flag', 'force', inputs.force, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeDebug(inputs: DebugOptions): Promise<void> {
  let args = ['debug']

  args = addValueToArgs('noflag', '', inputs.subcommand, args)
  args = addValueToArgs('noflag', '', inputs.json, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeForceUnlock(inputs: ForceUnlockOptions): Promise<void> {
  let args = ['force-unlock']

  args = addValueToArgs('flag', 'force', inputs.force, args)
  args = addValueToArgs('noflag', '', inputs.lockId, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
async function executeState(inputs: StateOptions): Promise<void> {
  let args = ['state']

  args = addValueToArgs('noflag', '', inputs.subcommand, args)

  if (inputs.subcommand === 'list') {
    args = addValueToArgs('string', 'state', inputs.state, args)
    args = addValueToArgs('string', 'id', inputs.id, args)
    args = addValueToArgs('noflag', '', inputs.addresses, args)
  }

  if (inputs.subcommand === 'mv') {
    args = addValueToArgs('string', 'backup', inputs.backup, args)
    args = addValueToArgs('string', 'backup-out', inputs.backupOut, args)
    args = addValueToArgs('string', 'state', inputs.state, args)
    args = addValueToArgs('string', 'state-out', inputs.stateOut, args)
    args = addValueToArgs('noflag', '', inputs.source, args)
    args = addValueToArgs('noflag', '', inputs.destination, args)
  }

  if (inputs.subcommand === 'push') {
    args = addValueToArgs('flag', 'force', inputs.force, args)
    args = addValueToArgs('noflag', '', inputs.path, args)
  }

  if (inputs.subcommand === 'rm') {
    args = addValueToArgs('string', 'backup', inputs.backup, args)
    args = addValueToArgs('string', 'state', inputs.state, args)
  }

  if (inputs.subcommand === 'show') {
    args = addValueToArgs('string', 'state', inputs.state, args)
    args = addValueToArgs('noflag', '', inputs.address, args)
  }

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}

async function main(): Promise<void> {
  try {
    const terraformCommand = core.getInput('command')

    let terraformInputs = {}
    if (core.getInput('params') || core.getInput('params') !== '') {
      terraformInputs = JSON.parse(core.getInput('params'))
    }

    console.debug(`command :  ${terraformCommand}`)
    console.debug(`params :  ${JSON.stringify(terraformInputs)}`)

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

const TERRAFORM_VERSION = 'terraform'
main()
