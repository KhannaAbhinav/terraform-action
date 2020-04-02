import {UploadOptions} from '@actions/artifact'
import {addValueToArgs, uploadFile, uploadDataAsFile} from './utils'
import {ExecOptions} from '@actions/exec/lib/interfaces'
import * as exec from '@actions/exec'
import * as core from '@actions/core'
import * as io from '@actions/io'
import * as request from 'request-promise-native'

import * as tc from '@actions/tool-cache'
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
  TerraformOptions,
  DownloadOptions
} from './typings/interfaces'

let stdOutput = ''
let stdError = ''

function setOptions(inputs: TerraformOptions): ExecOptions {
  const options: ExecOptions = {}
  if (!inputs.cwd) {
    inputs.cwd = '.'
  }
  options.cwd = inputs.cwd
  options.failOnStdErr = true

  options.listeners = {
    stdout: (data: Buffer) => {
      stdOutput += data.toString()
      core.setOutput('stdOut', stdOutput)
    },
    stderr: (data: Buffer) => {
      stdError += data.toString()
      core.setOutput('stdErr', stdError)
    }
  }
  return options
}

export async function executeApply(TERRAFORM_VERSION: string, inputs: ApplyOptions): Promise<void> {
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

export async function executeConsole(TERRAFORM_VERSION: string, inputs: ConsoleOptions): Promise<void> {
  let args = ['console']

  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeDestroy(TERRAFORM_VERSION: string, inputs: DestroyOptions): Promise<void> {
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

export async function executeFmt(TERRAFORM_VERSION: string, inputs: FmtOptions): Promise<void> {
  let args = ['fmt']
  args = addValueToArgs('boolean', 'list', inputs.list, args)
  args = addValueToArgs('boolean', 'write', inputs.write, args)

  args = addValueToArgs('flag', 'diff', inputs.diff, args)
  args = addValueToArgs('flag', 'check', inputs.check, args)
  args = addValueToArgs('flag', 'recursive', inputs.recursive, args)

  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeGet(TERRAFORM_VERSION: string, inputs: GetOptions): Promise<void> {
  let args = ['get']

  args = addValueToArgs('flag', 'update', inputs.update, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}

export async function executeGraph(TERRAFORM_VERSION: string, inputs: GraphOptions): Promise<void> {
  let args = ['graph']

  args = addValueToArgs('flag', 'draw-cycles', inputs.drawCycles, args)
  args = addValueToArgs('string', 'type', inputs.type, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeImport(TERRAFORM_VERSION: string, inputs: ImportOptions): Promise<void> {
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
export async function executeInit(TERRAFORM_VERSION: string, inputs: InitOptions): Promise<void> {
  let args = ['init']
  args = addValueToArgs('boolean', 'input', inputs.input, args)
  args = addValueToArgs('boolean', 'lock', inputs.lock, args)
  args = addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args)
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'upgrade', inputs.upgrade, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeOutput(TERRAFORM_VERSION: string, inputs: OutputOptions): Promise<void> {
  let args = ['output']

  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'json', inputs.json, args)
  args = addValueToArgs('string', 'state', inputs.state, args)
  args = addValueToArgs('noflag', '', inputs.name, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executePlan(TERRAFORM_VERSION: string, inputs: PlanOptions): Promise<void> {
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
  await uploadFile(inputs.upload, inputs.out, inputs.cwd, inputs.artifactName, setUploadOptions(inputs))
}

function setUploadOptions(inputs: TerraformOptions): UploadOptions {
  const uploadOptions: UploadOptions = {
    continueOnError: Boolean(inputs.continueOnError)
  }
  return uploadOptions
}

export async function executeProviders(TERRAFORM_VERSION: string, inputs: ProvidersOptions): Promise<void> {
  let args = ['providers']

  args = addValueToArgs('noflag', '', inputs.configPath, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeRefresh(TERRAFORM_VERSION: string, inputs: RefreshOptions): Promise<void> {
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
export async function executeShow(TERRAFORM_VERSION: string, inputs: ShowOptions): Promise<void> {
  let args = ['show']

  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'json', inputs.json, args)
  args = addValueToArgs('noflag', '', inputs.path, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
  await uploadDataAsFile(inputs.upload, stdOutput, inputs.fileName, inputs.artifactName, setUploadOptions(inputs))
}
export async function executeTaint(TERRAFORM_VERSION: string, inputs: TaintOptions): Promise<void> {
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
export async function executeUntaint(TERRAFORM_VERSION: string, inputs: UntaintOptions): Promise<void> {
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
export async function executeValidate(TERRAFORM_VERSION: string, inputs: ValidateOptions): Promise<void> {
  let args = ['validate']
  args = addValueToArgs('flag', 'no-color', inputs.noColor, args)
  args = addValueToArgs('flag', 'json', inputs.json, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeVersion(TERRAFORM_VERSION: string, inputs: VersionOptions): Promise<void> {
  let args: string[] = []
  args = addValueToArgs('flag', 'version', 'true', args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeWorkspace(TERRAFORM_VERSION: string, inputs: WorkspaceOptions): Promise<void> {
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
export async function execute012Upgrade(TERRAFORM_VERSION: string, inputs: Upgrade012Options): Promise<void> {
  let args = ['0.12upgrade']
  args = addValueToArgs('flag', 'yes', inputs.yes, args)
  args = addValueToArgs('flag', 'force', inputs.force, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeDebug(TERRAFORM_VERSION: string, inputs: DebugOptions): Promise<void> {
  let args = ['debug']

  args = addValueToArgs('noflag', '', inputs.subcommand, args)
  args = addValueToArgs('noflag', '', inputs.json, args)
  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeForceUnlock(TERRAFORM_VERSION: string, inputs: ForceUnlockOptions): Promise<void> {
  let args = ['force-unlock']

  args = addValueToArgs('flag', 'force', inputs.force, args)
  args = addValueToArgs('noflag', '', inputs.lockId, args)
  args = addValueToArgs('noflag', '', inputs.dir, args)

  await exec.exec(TERRAFORM_VERSION, args, setOptions(inputs))
}
export async function executeState(TERRAFORM_VERSION: string, inputs: StateOptions): Promise<void> {
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

export async function executeDownload(TERRAFORM_VERSION: string, inputs: DownloadOptions): Promise<void> {
  let os = 'linux'
  let tfLocation = '/usr/local/bin/terraform'
  // let quote = `'`
  if (process.platform === 'win32') {
    os = 'windows'
    tfLocation = 'd:/terraform'
    // quote = `"`
  }
  let askedVersion = ''
  if (inputs.version === 'latest') {
    stdOutput = ''
    const response = await request.get(`https://checkpoint-api.hashicorp.com/v1/check/terraform`)

    core.info(`Output of http get is ${response}`)
    askedVersion = JSON.parse(response)['current_version']
    stdOutput = ''
    core.info(`Asked Version is Latest(Terraform v${askedVersion})`.trim())
  } else {
    askedVersion = inputs.version
    core.info(`Asked Version is Terraform v${askedVersion}`.trim())
  }
  let installedVersion = ''
  try {
    await executeVersion(TERRAFORM_VERSION, inputs as VersionOptions)
    installedVersion = stdOutput
    core.info(`Installed Version is ${installedVersion}`.trim())
  } catch (err) {
    core.info('No terraform installed')
  }

  if (installedVersion.trim() !== `Terraform v${askedVersion}`.trim()) {
    const terraformDownloadLink = `https://releases.hashicorp.com/terraform/${askedVersion}/terraform_${askedVersion}_${os}_amd64.zip`
    const terraformPath = await tc.downloadTool(terraformDownloadLink)
    io.mkdirP(tfLocation)
    const terraformExtractedFolder = await tc.extractZip(terraformPath, `${tfLocation}/${askedVersion}`)
    core.exportVariable('TERRAFORM_PATH', `${terraformExtractedFolder}/terraform`)
  }
}
