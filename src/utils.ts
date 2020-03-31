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

export function addValueToArgs(type: string, flagToAdd: string, value: string | undefined, args: string[]): string[] {
  switch (type) {
    case 'flag':
      return addFlagToArgs(flagToAdd, value, args)
    case 'boolean':
      return addBooleanValueToArgs(flagToAdd, value, args)
    case 'number':
      return addNumberValueToArgs(flagToAdd, value, args)
    case 'string':
      return addStringValueToArgs(flagToAdd, value, args)
    case 'path':
      return addPathValueToArgs(value, args)
    default:
      return addStringValueToArgs(flagToAdd, value, args)
  }
}
