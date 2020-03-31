"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
const utils_1 = require("./utils");
let stdOutput = '';
let stdError = '';
function setOptions(inputs) {
    const options = {};
    if (!inputs.cwd) {
        inputs.cwd = '.';
    }
    options.cwd = inputs.cwd;
    options.failOnStdErr = true;
    options.listeners = {
        stdout: (data) => {
            stdOutput += data.toString();
            core.setOutput('stdOut', stdOutput);
        },
        stderr: (data) => {
            stdError += data.toString();
            core.setOutput('stdErr', stdError);
        }
    };
    return options;
}
function executeApply(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['apply'];
        args = utils_1.addValueToArgs('flag', 'compact-warnings', inputs.compactWarnings, args);
        args = utils_1.addValueToArgs('string', 'backup', inputs.backup, args);
        args = utils_1.addValueToArgs('boolean', 'input', inputs.input, args);
        args = utils_1.addValueToArgs('boolean', 'lock', inputs.lock, args);
        args = utils_1.addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args);
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'auto-approve', inputs.autoApprove, args);
        args = utils_1.addValueToArgs('number', 'parallelism', inputs.parallelism, args);
        args = utils_1.addValueToArgs('boolean', 'refresh', inputs.refresh, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('string', 'state-out', inputs.stateOut, args);
        args = utils_1.addValueToArgs('string', 'target', inputs.target, args);
        if (inputs.var) {
            const varMap = new Map(Object.entries(inputs.var));
            for (const key of varMap.keys()) {
                args = utils_1.addValueToArgs('flag', 'var', 'true', args);
                args = utils_1.addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args);
            }
        }
        args = utils_1.addValueToArgs('string', 'var-file', inputs.varFile, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dirOrPlan, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeConsole(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['console'];
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeDestroy(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['destroy'];
        args = utils_1.addValueToArgs('flag', 'compact-warnings', inputs.compactWarnings, args);
        args = utils_1.addValueToArgs('string', 'backup', inputs.backup, args);
        args = utils_1.addValueToArgs('boolean', 'input', inputs.input, args);
        args = utils_1.addValueToArgs('boolean', 'lock', inputs.lock, args);
        args = utils_1.addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args);
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'auto-approve', inputs.autoApprove, args);
        args = utils_1.addValueToArgs('number', 'parallelism', inputs.parallelism, args);
        args = utils_1.addValueToArgs('boolean', 'refresh', inputs.refresh, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('string', 'state-out', inputs.stateOut, args);
        args = utils_1.addValueToArgs('string', 'target', inputs.target, args);
        if (inputs.var) {
            const varMap = new Map(Object.entries(inputs.var));
            for (const key of varMap.keys()) {
                args = utils_1.addValueToArgs('flag', 'var', 'true', args);
                args = utils_1.addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args);
            }
        }
        args = utils_1.addValueToArgs('string', 'var-file', inputs.varFile, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeFmt(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['fmt'];
        args = utils_1.addValueToArgs('boolean', 'list', inputs.list, args);
        args = utils_1.addValueToArgs('boolean', 'write', inputs.write, args);
        args = utils_1.addValueToArgs('flag', 'diff', inputs.diff, args);
        args = utils_1.addValueToArgs('flag', 'check', inputs.check, args);
        args = utils_1.addValueToArgs('flag', 'recursive', inputs.recursive, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeGet(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['get'];
        args = utils_1.addValueToArgs('flag', 'update', inputs.update, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeGraph(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['graph'];
        args = utils_1.addValueToArgs('flag', 'draw-cycles', inputs.drawCycles, args);
        args = utils_1.addValueToArgs('string', 'type', inputs.type, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeImport(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['import'];
        args = utils_1.addValueToArgs('string', 'backup', inputs.backup, args);
        args = utils_1.addValueToArgs('string', 'config', inputs.config, args);
        args = utils_1.addValueToArgs('boolean', 'input', inputs.input, args);
        args = utils_1.addValueToArgs('boolean', 'lock', inputs.lock, args);
        args = utils_1.addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args);
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('number', 'parallelism', inputs.parallelism, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('string', 'state-out', inputs.stateOut, args);
        if (inputs.var) {
            const varMap = new Map(Object.entries(inputs.var));
            for (const key of varMap.keys()) {
                args = utils_1.addValueToArgs('flag', 'var', 'true', args);
                args = utils_1.addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args);
            }
        }
        args = utils_1.addValueToArgs('string', 'var-file', inputs.varFile, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.addressId, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeInit(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['init'];
        args = utils_1.addValueToArgs('boolean', 'input', inputs.input, args);
        args = utils_1.addValueToArgs('boolean', 'lock', inputs.lock, args);
        args = utils_1.addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args);
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'upgrade', inputs.upgrade, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeOutput(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['output'];
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'json', inputs.json, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.name, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executePlan(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['plan'];
        args = utils_1.addValueToArgs('flag', 'compact-warnings', inputs.compactWarnings, args);
        args = utils_1.addValueToArgs('flag', 'destroy', inputs.destroy, args);
        args = utils_1.addValueToArgs('flag', 'detailed-exitcode', inputs.detailedExitCode, args);
        args = utils_1.addValueToArgs('boolean', 'input', inputs.input, args);
        args = utils_1.addValueToArgs('boolean', 'lock', inputs.lock, args);
        args = utils_1.addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args);
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('string', 'out', inputs.out, args);
        args = utils_1.addValueToArgs('number', 'parallelism', inputs.parallelism, args);
        args = utils_1.addValueToArgs('boolean', 'refresh', inputs.refresh, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('string', 'target', inputs.target, args);
        if (inputs.var) {
            const varMap = new Map(Object.entries(inputs.var));
            for (const key of varMap.keys()) {
                args = utils_1.addValueToArgs('flag', 'var', 'true', args);
                args = utils_1.addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args);
            }
        }
        args = utils_1.addValueToArgs('string', 'var-file', inputs.varFile, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
        yield utils_1.uploadFile(inputs.upload, inputs.out, inputs.cwd, inputs.artifactName, setUploadOptions(inputs));
    });
}
function setUploadOptions(inputs) {
    const uploadOptions = {
        continueOnError: Boolean(inputs.continueOnError)
    };
    return uploadOptions;
}
function executeProviders(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['providers'];
        args = utils_1.addValueToArgs('noflag', '', inputs.configPath, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeRefresh(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['refresh'];
        args = utils_1.addValueToArgs('string', 'backup', inputs.backup, args);
        args = utils_1.addValueToArgs('flag', 'compact-warnings', inputs.compactWarnings, args);
        args = utils_1.addValueToArgs('boolean', 'input', inputs.input, args);
        args = utils_1.addValueToArgs('boolean', 'lock', inputs.lock, args);
        args = utils_1.addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args);
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('number', 'parallelism', inputs.parallelism, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('string', 'state-out', inputs.stateOut, args);
        args = utils_1.addValueToArgs('string', 'target', inputs.target, args);
        if (inputs.var) {
            const varMap = new Map(Object.entries(inputs.var));
            for (const key of varMap.keys()) {
                args = utils_1.addValueToArgs('flag', 'var', 'true', args);
                args = utils_1.addValueToArgs('noflag', '', `${key}=${varMap.get(key)}`, args);
            }
        }
        args = utils_1.addValueToArgs('string', 'var-file', inputs.varFile, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeShow(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['show'];
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'json', inputs.json, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.path, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
        yield utils_1.uploadDataAsFile(inputs.upload, stdOutput, inputs.filename, inputs.artifactName, setUploadOptions(inputs));
    });
}
function executeTaint(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['taint'];
        args = utils_1.addValueToArgs('flag', 'allow-missing', inputs.allowMissing, args);
        args = utils_1.addValueToArgs('string', 'backup', inputs.backup, args);
        args = utils_1.addValueToArgs('boolean', 'lock', inputs.lock, args);
        args = utils_1.addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('string', 'state-out', inputs.stateOut, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.address, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeUntaint(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['untaint'];
        args = utils_1.addValueToArgs('flag', 'allow-missing', inputs.allowMissing, args);
        args = utils_1.addValueToArgs('string', 'backup', inputs.backup, args);
        args = utils_1.addValueToArgs('boolean', 'lock', inputs.lock, args);
        args = utils_1.addValueToArgs('number', 'lock-timeout', inputs.lockTimeout, args);
        args = utils_1.addValueToArgs('string', 'module', inputs.module, args);
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('string', 'state-out', inputs.stateOut, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.name, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeValidate(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['validate'];
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'json', inputs.json, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeVersion(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        yield exec.exec(TERRAFORM_VERSION, ['-version'], setOptions(inputs));
    });
}
function executeWorkspace(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['workspace'];
        args = utils_1.addValueToArgs('noflag', '', inputs.subcommand, args);
        if (inputs.subcommand === 'select') {
            args = utils_1.addValueToArgs('noflag', '', inputs.name, args);
        }
        if (inputs.subcommand === 'new') {
            args = utils_1.addValueToArgs('flag', 'state', inputs.state, args);
            args = utils_1.addValueToArgs('noflag', '', inputs.name, args);
        }
        if (inputs.subcommand === 'delete') {
            args = utils_1.addValueToArgs('flag', 'force', inputs.force, args);
            args = utils_1.addValueToArgs('noflag', '', inputs.name, args);
        }
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function execute012Upgrade(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['0.12upgrade'];
        args = utils_1.addValueToArgs('flag', 'yes', inputs.yes, args);
        args = utils_1.addValueToArgs('flag', 'force', inputs.force, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeDebug(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['debug'];
        args = utils_1.addValueToArgs('noflag', '', inputs.subcommand, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.json, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeForceUnlock(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['force-unlock'];
        args = utils_1.addValueToArgs('flag', 'force', inputs.force, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.lockId, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function executeState(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['state'];
        args = utils_1.addValueToArgs('noflag', '', inputs.subcommand, args);
        if (inputs.subcommand === 'list') {
            args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
            args = utils_1.addValueToArgs('string', 'id', inputs.id, args);
            args = utils_1.addValueToArgs('noflag', '', inputs.addresses, args);
        }
        if (inputs.subcommand === 'mv') {
            args = utils_1.addValueToArgs('string', 'backup', inputs.backup, args);
            args = utils_1.addValueToArgs('string', 'backup-out', inputs.backupOut, args);
            args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
            args = utils_1.addValueToArgs('string', 'state-out', inputs.stateOut, args);
            args = utils_1.addValueToArgs('noflag', '', inputs.source, args);
            args = utils_1.addValueToArgs('noflag', '', inputs.destination, args);
        }
        if (inputs.subcommand === 'push') {
            args = utils_1.addValueToArgs('flag', 'force', inputs.force, args);
            args = utils_1.addValueToArgs('noflag', '', inputs.path, args);
        }
        if (inputs.subcommand === 'rm') {
            args = utils_1.addValueToArgs('string', 'backup', inputs.backup, args);
            args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        }
        if (inputs.subcommand === 'show') {
            args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
            args = utils_1.addValueToArgs('noflag', '', inputs.address, args);
        }
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const terraformCommand = core.getInput('command');
            let terraformInputs = {};
            if (core.getInput('params') || core.getInput('params') !== '') {
                terraformInputs = JSON.parse(core.getInput('params'));
            }
            console.debug(`command :  ${terraformCommand}`);
            console.debug(`params :  ${JSON.stringify(terraformInputs)}`);
            let terraformOutput = {};
            switch (terraformCommand) {
                case 'apply':
                    terraformOutput = executeApply(terraformInputs);
                    break;
                case 'console':
                    terraformOutput = executeConsole(terraformInputs);
                    break;
                case 'destroy':
                    terraformOutput = executeDestroy(terraformInputs);
                    break;
                case 'fmt':
                    terraformOutput = executeFmt(terraformInputs);
                    break;
                case 'get':
                    terraformOutput = executeGet(terraformInputs);
                    break;
                case 'graph':
                    terraformOutput = executeGraph(terraformInputs);
                    break;
                case 'import':
                    terraformOutput = executeImport(terraformInputs);
                    break;
                case 'init':
                    terraformOutput = executeInit(terraformInputs);
                    break;
                case 'output':
                    terraformOutput = executeOutput(terraformInputs);
                    break;
                case 'plan':
                    terraformOutput = executePlan(terraformInputs);
                    break;
                case 'providers':
                    terraformOutput = executeProviders(terraformInputs);
                    break;
                case 'refresh':
                    terraformOutput = executeRefresh(terraformInputs);
                    break;
                case 'show':
                    terraformOutput = executeShow(terraformInputs);
                    break;
                case 'taint':
                    terraformOutput = executeTaint(terraformInputs);
                    break;
                case 'untaint':
                    terraformOutput = executeUntaint(terraformInputs);
                    break;
                case 'validate':
                    terraformOutput = executeValidate(terraformInputs);
                    break;
                case 'version':
                    terraformOutput = executeVersion(terraformInputs);
                    break;
                case 'workspace':
                    terraformOutput = executeWorkspace(terraformInputs);
                    break;
                case '0.12upgrade':
                    terraformOutput = execute012Upgrade(terraformInputs);
                    break;
                case 'debug':
                    terraformOutput = executeDebug(terraformInputs);
                    break;
                case 'force-unlock':
                    terraformOutput = executeForceUnlock(terraformInputs);
                    break;
                case 'state':
                    terraformOutput = executeState(terraformInputs);
                    break;
                default:
                    core.setFailed('Invalid Command or Command not implemented yet');
            }
            core.setOutput('commandOutput', JSON.stringify(terraformOutput));
        }
        catch (error) {
            core.info(error);
            core.setFailed(error.message);
        }
    });
}
const TERRAFORM_VERSION = 'terraform';
main();
