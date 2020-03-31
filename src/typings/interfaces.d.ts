interface ExecOptions {
  cwd?: string
  version: string
}

interface ApplyTerraformOptions {
  backup?: string
  compactWarnings?: string
  lock?: string
  lockTimeout?: string
  input?: string
  autoApprove?: string
  noColor?: string
  parallelism?: string
  refresh?: string
  state?: string
  stateOut?: string
  target?: string
  var?: {
    [key: string]: string
  }
  varFile?: string
  dirOrPlan?: string
}

interface ConsoleTerraformOptions {
  state?: string
  dir?: string
}

interface DestroyTerraformOptions {
  dir?: string
}

interface FmtTerraformOptions {
  list?: string
  write?: string
  diff?: string
  check?: string
  recursive?: string
  dir?: string
}

interface GetTerraformOptions {
  update?: string
  dir?: string
}

interface GraphTerraformOptions {
  drawCycles?: string
  type?: string
  dir?: string
}

interface ImportTerraformOptions {
  backup?: string
  config?: string
  input?: string
  lock?: string
  lockTimeout?: string
  noColor?: string
  parallelism?: string
  provider?: string
  state?: string
  stateOut?: string
  var?: {
    [key: string]: string
  }
  varFile?: string
  addressId: string
}
interface InitTerraformOptions {
  input?: string
  lock?: string
  lockTimeout?: string
  noColor?: string
  upgrade?: string
  dir?: string
}
interface OutputTerraformOptions {
  json?: string
  noColor?: string
  state?: string
  name?: string
}

interface PlanTerraformOptions {
  compactWarnings?: string
  destroy?: string
  detailedExitCode?: string
  lock?: string
  lockTimeout?: string
  input?: string
  out?: string
  autoApprove?: string
  noColor?: string
  parallelism?: string
  refresh?: string
  state?: string
  target?: string
  var?: {
    [key: string]: string
  }
  varFile?: string
  dir?: string
}
interface ProvidersTerraformOptions {
  configPath?: string
}
interface RefreshTerraformOptions {
  backup?: string
  compactWarnings?: string
  lock?: string
  lockTimeout?: string
  input?: string
  autoApprove?: string
  noColor?: string
  parallelism?: string
  state?: string
  stateOut?: string
  target?: string
  var?: {
    [key: string]: string
  }
  varFile?: string
  dir?: string
}

interface ShowTerraformOptions {
  noColor?: string
  json?: string
  path?: string
}

interface TaintTerraformOptions {
  allowMissing?: string
  backup?: string
  lock?: string
  lockTimeout?: string
  state?: string
  stateOut?: string
  address: string
}
interface UntaintTerraformOptions {
  allowMissing?: string
  backup?: string
  lock?: string
  lockTimeout?: string
  module?: string
  noColor?: string
  state?: string
  stateOut?: string
  name: string
}
interface ValidateTerraformOptions {
  noColor?: string
  json?: string
  dir?: string
}

interface WorkspaceTerraformOptions {
  subcommand: 'list' | 'select' | 'new' | 'delete' | 'show'
  name?: string
  state?: string
  force?: string
}

interface Upgrade012TerraformOptions {
  yes?: string
  force?: string
  dir?: string
}

interface DebugTerraformOptions {
  subcommand: 'json2dot'
  json: string
}

interface ForceUnlockTerraformOptions {
  force?: string
  lockId: string
  dir?: string
}

interface StateTerraformOptions {
  subcommand: 'list' | 'mv' | 'pull' | 'push' | 'rm' | 'show'
  state?: string
  id?: string
  addresses?: string
  backup?: string
  backupOut?: string
  stateOut?: string
  force?: string
  address?: string
  path?: string
  source?: string
  destination?: string
}

export type ApplyOptions = ApplyTerraformOptions & ExecOptions
export type ConsoleOptions = ConsoleTerraformOptions & ExecOptions
export type DestroyOptions = DestroyTerraformOptions & Omit<ApplyOptions, 'dirOrPlan'> & ExecOptions

export type FmtOptions = FmtTerraformOptions & ExecOptions
export type GetOptions = GetTerraformOptions & ExecOptions
export type GraphOptions = GraphTerraformOptions & ExecOptions
export type ImportOptions = ImportTerraformOptions & ExecOptions
export type InitOptions = InitTerraformOptions & ExecOptions
export type OutputOptions = OutputTerraformOptions & ExecOptions
export type PlanOptions = PlanTerraformOptions & ExecOptions
export type ProvidersOptions = ProvidersTerraformOptions & ExecOptions
export type RefreshOptions = RefreshTerraformOptions & ExecOptions
export type ShowOptions = ShowTerraformOptions & ExecOptions
export type TaintOptions = TaintTerraformOptions & ExecOptions
export type UntaintOptions = UntaintTerraformOptions & ExecOptions
export type ValidateOptions = ValidateTerraformOptions & ExecOptions
export type VersionOptions = ExecOptions
export type WorkspaceOptions = WorkspaceTerraformOptions & ExecOptions
export type Upgrade012Options = Upgrade012TerraformOptions & ExecOptions
export type DebugOptions = DebugTerraformOptions & ExecOptions
export type ForceUnlockOptions = ForceUnlockTerraformOptions & ExecOptions
export type StateOptions = StateTerraformOptions & ExecOptions
export type TerraformOptions =
  | ApplyOptions
  | ConsoleOptions
  | DestroyOptions
  | FmtOptions
  | GetOptions
  | GraphOptions
  | ImportOptions
  | InitOptions
  | OutputOptions
  | PlanOptions
  | ProvidersOptions
  | RefreshOptions
  | ShowOptions
  | TaintOptions
  | UntaintOptions
  | ValidateOptions
  | VersionOptions
  | WorkspaceOptions
  | Upgrade012Options
  | DebugOptions
  | ForceUnlockOptions
  | StateOptions
