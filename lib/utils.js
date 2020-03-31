"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFlagToArgs(flagToAdd, value, args) {
    if (value)
        args.push(`-${flagToAdd}`);
    return args;
}
function addStringValueToArgs(flagToAdd, value, args) {
    if (value)
        args.push(`-${flagToAdd}=${value}`);
    return args;
}
function addNumberValueToArgs(flagToAdd, value, args) {
    if (value)
        args.push(`-${flagToAdd}=${+value}`);
    return args;
}
function addBooleanValueToArgs(flagToAdd, value, args) {
    if (value !== undefined)
        args.push(`-${flagToAdd}=${Boolean(value)}`);
    return args;
}
function addPathValueToArgs(value, args) {
    if (value)
        args.push(`${value}`);
    else
        args.push(`.`);
    return args;
}
function addValueToArgs(type, flagToAdd, value, args) {
    switch (type) {
        case 'flag':
            return addFlagToArgs(flagToAdd, value, args);
        case 'boolean':
            return addBooleanValueToArgs(flagToAdd, value, args);
        case 'number':
            return addNumberValueToArgs(flagToAdd, value, args);
        case 'string':
            return addStringValueToArgs(flagToAdd, value, args);
        case 'noflag':
            return addPathValueToArgs(value, args);
        default:
            return addStringValueToArgs(flagToAdd, value, args);
    }
}
exports.addValueToArgs = addValueToArgs;
