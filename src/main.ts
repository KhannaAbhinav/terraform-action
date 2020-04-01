import * as core from '@actions/core'
import {
  execute012Upgrade,
  executeApply,
  executeConsole,
  executeDebug,
  executeDestroy,
  executeFmt,
  executeForceUnlock,
  executeGet,
  executeGraph,
  executeImport,
  executeInit,
  executeOutput,
  executePlan,
  executeProviders,
  executeRefresh,
  executeShow,
  executeState,
  executeTaint,
  executeUntaint,
  executeValidate,
  executeVersion,
  executeWorkspace,
  executeDownload
} from './terraform.commands'

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
  WorkspaceOptions
} from './typings/interfaces'

async function main(): Promise<void> {
  if (process.env.CUSTOM_TERRAFORM_LOCATION) TERRAFORM_VERSION = process.env.CUSTOM_TERRAFORM_LOCATION
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
        terraformOutput = executeApply(TERRAFORM_VERSION, terraformInputs as ApplyOptions)
        break
      case 'console':
        terraformOutput = executeConsole(TERRAFORM_VERSION, terraformInputs as ConsoleOptions)
        break
      case 'destroy':
        terraformOutput = executeDestroy(TERRAFORM_VERSION, terraformInputs as DestroyOptions)
        break
      case 'fmt':
        terraformOutput = executeFmt(TERRAFORM_VERSION, terraformInputs as FmtOptions)
        break
      case 'get':
        terraformOutput = executeGet(TERRAFORM_VERSION, terraformInputs as GetOptions)
        break
      case 'graph':
        terraformOutput = executeGraph(TERRAFORM_VERSION, terraformInputs as GraphOptions)
        break
      case 'import':
        terraformOutput = executeImport(TERRAFORM_VERSION, terraformInputs as ImportOptions)
        break
      case 'init':
        terraformOutput = executeInit(TERRAFORM_VERSION, terraformInputs as InitOptions)
        break
      case 'output':
        terraformOutput = executeOutput(TERRAFORM_VERSION, terraformInputs as OutputOptions)
        break
      case 'plan':
        terraformOutput = executePlan(TERRAFORM_VERSION, terraformInputs as PlanOptions)
        break
      case 'providers':
        terraformOutput = executeProviders(TERRAFORM_VERSION, terraformInputs as ProvidersOptions)
        break
      case 'refresh':
        terraformOutput = executeRefresh(TERRAFORM_VERSION, terraformInputs as RefreshOptions)
        break
      case 'show':
        terraformOutput = executeShow(TERRAFORM_VERSION, terraformInputs as ShowOptions)
        break
      case 'taint':
        terraformOutput = executeTaint(TERRAFORM_VERSION, terraformInputs as TaintOptions)
        break
      case 'untaint':
        terraformOutput = executeUntaint(TERRAFORM_VERSION, terraformInputs as UntaintOptions)
        break
      case 'validate':
        terraformOutput = executeValidate(TERRAFORM_VERSION, terraformInputs as ValidateOptions)
        break
      case 'version':
        terraformOutput = executeVersion(TERRAFORM_VERSION, terraformInputs as VersionOptions)
        break
      case 'workspace':
        terraformOutput = executeWorkspace(TERRAFORM_VERSION, terraformInputs as WorkspaceOptions)
        break
      case '0.12upgrade':
        terraformOutput = execute012Upgrade(TERRAFORM_VERSION, terraformInputs as Upgrade012Options)
        break
      case 'debug':
        terraformOutput = executeDebug(TERRAFORM_VERSION, terraformInputs as DebugOptions)
        break
      case 'force-unlock':
        terraformOutput = executeForceUnlock(TERRAFORM_VERSION, terraformInputs as ForceUnlockOptions)
        break
      case 'state':
        terraformOutput = executeState(TERRAFORM_VERSION, terraformInputs as StateOptions)
        break

      case 'download':
        terraformOutput = executeDownload(TERRAFORM_VERSION, terraformInputs as StateOptions)
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

let TERRAFORM_VERSION = 'terraform'
main()
