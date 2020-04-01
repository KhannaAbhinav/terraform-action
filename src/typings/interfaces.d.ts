interface ExecOptions {
  cwd?: string
  version: string
}

interface Artifact {
  artifactName?: string
  upload?: boolean
  fileName?: string
}

interface UploadOptions {
  continueOnError?: boolean
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

interface DownloadTerraformOptions {
  version?: string
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

export type ApplyOptions = ApplyTerraformOptions & ExecOptions & Artifact & UploadOptions
export type ConsoleOptions = ConsoleTerraformOptions & ExecOptions & Artifact & UploadOptions
export type DestroyOptions = DestroyTerraformOptions &
  Omit<ApplyOptions, 'dirOrPlan'> &
  ExecOptions &
  Artifact &
  UploadOptions

export type FmtOptions = FmtTerraformOptions & ExecOptions & Artifact & UploadOptions
export type GetOptions = GetTerraformOptions & ExecOptions & Artifact & UploadOptions
export type GraphOptions = GraphTerraformOptions & ExecOptions & Artifact & UploadOptions
export type ImportOptions = ImportTerraformOptions & ExecOptions & Artifact & UploadOptions
export type InitOptions = InitTerraformOptions & ExecOptions & Artifact & UploadOptions
export type OutputOptions = OutputTerraformOptions & ExecOptions & Artifact & UploadOptions
export type PlanOptions = PlanTerraformOptions & ExecOptions & Artifact & UploadOptions
export type ProvidersOptions = ProvidersTerraformOptions & ExecOptions & Artifact & UploadOptions
export type RefreshOptions = RefreshTerraformOptions & ExecOptions & Artifact & UploadOptions
export type ShowOptions = ShowTerraformOptions & ExecOptions & Artifact & UploadOptions
export type TaintOptions = TaintTerraformOptions & ExecOptions & Artifact & UploadOptions
export type UntaintOptions = UntaintTerraformOptions & ExecOptions & Artifact & UploadOptions
export type ValidateOptions = ValidateTerraformOptions & ExecOptions & Artifact & UploadOptions
export type VersionOptions = ExecOptions & Artifact & UploadOptions
export type WorkspaceOptions = WorkspaceTerraformOptions & ExecOptions & Artifact & UploadOptions
export type Upgrade012Options = Upgrade012TerraformOptions & ExecOptions & Artifact & UploadOptions
export type DebugOptions = DebugTerraformOptions & ExecOptions & Artifact & UploadOptions
export type ForceUnlockOptions = ForceUnlockTerraformOptions & ExecOptions & Artifact & UploadOptions
export type StateOptions = StateTerraformOptions & ExecOptions & Artifact & UploadOptions
export type DownloadOptions = DownloadTerraformOptions & ExecOptions & Artifact & UploadOptions

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
  | DownloadOptions
