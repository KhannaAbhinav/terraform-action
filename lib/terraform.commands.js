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
const utils_1 = require("./utils");
const exec = __importStar(require("@actions/exec"));
const core = __importStar(require("@actions/core"));
const request = __importStar(require("request-promise-native"));
const tc = __importStar(require("@actions/tool-cache"));
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
function executeApply(TERRAFORM_VERSION, inputs) {
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
exports.executeApply = executeApply;
function executeConsole(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['console'];
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeConsole = executeConsole;
function executeDestroy(TERRAFORM_VERSION, inputs) {
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
exports.executeDestroy = executeDestroy;
function executeFmt(TERRAFORM_VERSION, inputs) {
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
exports.executeFmt = executeFmt;
function executeGet(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['get'];
        args = utils_1.addValueToArgs('flag', 'update', inputs.update, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeGet = executeGet;
function executeGraph(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['graph'];
        args = utils_1.addValueToArgs('flag', 'draw-cycles', inputs.drawCycles, args);
        args = utils_1.addValueToArgs('string', 'type', inputs.type, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeGraph = executeGraph;
function executeImport(TERRAFORM_VERSION, inputs) {
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
exports.executeImport = executeImport;
function executeInit(TERRAFORM_VERSION, inputs) {
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
exports.executeInit = executeInit;
function executeOutput(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['output'];
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'json', inputs.json, args);
        args = utils_1.addValueToArgs('string', 'state', inputs.state, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.name, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeOutput = executeOutput;
function executePlan(TERRAFORM_VERSION, inputs) {
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
exports.executePlan = executePlan;
function setUploadOptions(inputs) {
    const uploadOptions = {
        continueOnError: Boolean(inputs.continueOnError)
    };
    return uploadOptions;
}
function executeProviders(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['providers'];
        args = utils_1.addValueToArgs('noflag', '', inputs.configPath, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeProviders = executeProviders;
function executeRefresh(TERRAFORM_VERSION, inputs) {
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
exports.executeRefresh = executeRefresh;
function executeShow(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['show'];
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'json', inputs.json, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.path, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
        yield utils_1.uploadDataAsFile(inputs.upload, stdOutput, inputs.fileName, inputs.artifactName, setUploadOptions(inputs));
    });
}
exports.executeShow = executeShow;
function executeTaint(TERRAFORM_VERSION, inputs) {
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
exports.executeTaint = executeTaint;
function executeUntaint(TERRAFORM_VERSION, inputs) {
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
exports.executeUntaint = executeUntaint;
function executeValidate(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['validate'];
        args = utils_1.addValueToArgs('flag', 'no-color', inputs.noColor, args);
        args = utils_1.addValueToArgs('flag', 'json', inputs.json, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeValidate = executeValidate;
function executeVersion(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = [];
        args = utils_1.addValueToArgs('flag', 'version', 'true', args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeVersion = executeVersion;
function executeWorkspace(TERRAFORM_VERSION, inputs) {
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
exports.executeWorkspace = executeWorkspace;
function execute012Upgrade(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['0.12upgrade'];
        args = utils_1.addValueToArgs('flag', 'yes', inputs.yes, args);
        args = utils_1.addValueToArgs('flag', 'force', inputs.force, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.execute012Upgrade = execute012Upgrade;
function executeDebug(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['debug'];
        args = utils_1.addValueToArgs('noflag', '', inputs.subcommand, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.json, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeDebug = executeDebug;
function executeForceUnlock(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let args = ['force-unlock'];
        args = utils_1.addValueToArgs('flag', 'force', inputs.force, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.lockId, args);
        args = utils_1.addValueToArgs('noflag', '', inputs.dir, args);
        yield exec.exec(TERRAFORM_VERSION, args, setOptions(inputs));
    });
}
exports.executeForceUnlock = executeForceUnlock;
function executeState(TERRAFORM_VERSION, inputs) {
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
exports.executeState = executeState;
function executeDownload(TERRAFORM_VERSION, inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        let os = 'linux';
        let tfLocation = '/usr/local/bin/terraform';
        // let quote = `'`
        if (process.platform === 'win32') {
            os = 'windows';
            tfLocation = 'd:/terraform';
            // quote = `"`
        }
        let askedVersion = '';
        if (inputs.version === 'latest') {
            stdOutput = '';
            const response = yield request.get(`https://checkpoint-api.hashicorp.com/v1/check/terraform`);
            core.info(`Output of http get is ${response}`);
            askedVersion = JSON.parse(response)['current_version'];
            stdOutput = '';
            core.info(`Asked Version is Latest(Terraform v${askedVersion})`.trim());
        }
        else {
            askedVersion = inputs.version;
            core.info(`Asked Version is Terraform v${askedVersion}`.trim());
        }
        let installedVersion = '';
        try {
            yield executeVersion(TERRAFORM_VERSION, inputs);
            installedVersion = stdOutput;
            core.info(`Installed Version is ${installedVersion}`.trim());
        }
        catch (err) {
            core.info('No terraform installed');
        }
        if (installedVersion.trim() !== `Terraform v${askedVersion}`.trim()) {
            const terraformDownloadLink = `https://releases.hashicorp.com/terraform/${askedVersion}/terraform_${askedVersion}_${os}_amd64.zip`;
            const terraformPath = yield tc.downloadTool(terraformDownloadLink);
            const terraformExtractedFolder = yield tc.extractZip(terraformPath, `${tfLocation}/${askedVersion}`);
            core.exportVariable('TERRAFORM_PATH', `${terraformExtractedFolder}/terraform`);
        }
    });
}
exports.executeDownload = executeDownload;
