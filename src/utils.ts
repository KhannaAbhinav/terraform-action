import * as artifact from '@actions/artifact'
import * as io from '@actions/io'
import * as uuid from 'uuid'
import * as core from '@actions/core'
import * as fs from 'fs'

function addFlagToArgs(flagToAdd: string, value: string | undefined, args: string[]): string[] {
  if (value) args.push(`-${flagToAdd}`)
  return args
}

function addStringValueToArgs(flagToAdd: string, value: string | undefined, args: string[]): string[] {
  if (value) args.push(`-${flagToAdd}=${value}`)
  return args
}
function addNumberValueToArgs(flagToAdd: string, value: string | undefined, args: string[]): string[] {
  if (value) args.push(`-${flagToAdd}=${+value}`)
  return args
}

function addBooleanValueToArgs(flagToAdd: string, value: string | undefined, args: string[]): string[] {
  if (value !== undefined) args.push(`-${flagToAdd}=${Boolean(value)}`)
  return args
}

function addPathValueToArgs(value: string | undefined, args: string[]): string[] {
  if (value) args.push(`${value}`)
  else args.push(`.`)
  return args
}

export function addValueToArgs(
  type: 'string' | 'flag' | 'number' | 'boolean' | 'noflag',
  flagToAdd: string,
  value: string | undefined,
  args: string[]
): string[] {
  switch (type) {
    case 'flag':
      return addFlagToArgs(flagToAdd, value, args)
    case 'boolean':
      return addBooleanValueToArgs(flagToAdd, value, args)
    case 'number':
      return addNumberValueToArgs(flagToAdd, value, args)
    case 'string':
      return addStringValueToArgs(flagToAdd, value, args)
    case 'noflag':
      return addPathValueToArgs(value, args)
    default:
      return addStringValueToArgs(flagToAdd, value, args)
  }
}

export async function uploadFile(
  upload: boolean | undefined,
  file: string | undefined,
  rootDir: string | undefined,
  artifactName: string | undefined,
  uploadOptions: artifact.UploadOptions
): Promise<void> {
  if (upload) {
    if (!artifactName) {
      core.error('Artifact name is required')
      return
    }
    if (!rootDir) {
      core.error('Root dir is required when uploading a file')
      return
    }
    const artifactClient = artifact.create()

    if (file) {
      const files = []
      files.push(file)
      const uploadResult = await artifactClient.uploadArtifact(artifactName, files, rootDir, uploadOptions)
      core.setOutput('uploadResult', `${uploadResult}`)
    } else {
      core.setFailed('Output file is required when upload is true')
    }
  } else {
    core.info('upload flag is false')
  }
}

export async function uploadDataAsFile(
  upload: boolean | undefined,
  data: string | undefined,
  fileName: string | undefined,
  artifactName: string | undefined,
  uploadOptions: artifact.UploadOptions
): Promise<void> {
  if (upload) {
    if (!artifactName) {
      core.error('Artifact name is required')
      return
    }
    if (!fileName) {
      core.error('File name is required when uploading data')
      return
    }
    const artifactClient = artifact.create()

    const randomFolder = uuid.v4()
    io.mkdirP(randomFolder)
    if (data) {
      const filePath = `./${randomFolder}/${fileName}`
      fs.appendFileSync(filePath, data)
      const files = []
      files.push(filePath)
      const uploadResult = await artifactClient.uploadArtifact(artifactName, files, '.', uploadOptions)
      core.setOutput('uploadResult', `${uploadResult}`)
    } else {
      core.setFailed('Data to be uploaded is undefined')
    }
    try {
      io.rmRF(`./${randomFolder}`)
    } catch (error) {
      core.error('Error deleting temporary file')
    }
  } else {
    core.info('upload flag is false')
  }
}
