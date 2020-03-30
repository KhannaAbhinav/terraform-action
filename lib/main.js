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
function setOptions(inputs) {
    let myOutput = '';
    let myError = '';
    const options = {};
    if (inputs.cwd) {
        options.cwd = inputs.cwd;
    }
    options.failOnStdErr = true;
    options.listeners = {
        stdout: (data) => {
            myOutput += data.toString();
        },
        stderr: (data) => {
            myError += data.toString();
        }
    };
    core.info(myOutput);
    core.info(myError);
    return options;
}
function executeApply(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        const args = ['plan'];
        if (Boolean(inputs.compactWarnings) === true)
            args.push('-compact-warnings');
        if (inputs.backup)
            args.push(`-backup=${inputs.backup}`);
        if ('input' in inputs)
            args.push(`-input=${Boolean(inputs.input)}`);
        if ('lock' in inputs)
            args.push(`-lock=${Boolean(inputs.lock)}`);
        if (inputs.lockTimeout)
            args.push(`-lock-timeout=${+inputs.lockTimeout}`);
        if (Boolean(inputs.noColor) === true)
            args.push('-no-color');
        if (Boolean(inputs.autoApprove) === true)
            args.push('-auto-approve');
        if (inputs.parallelism)
            args.push(`-parallelism=${+inputs.parallelism}`);
        if (inputs.refresh)
            args.push(`-refresh=${Boolean(inputs.refresh)}`);
        if (inputs.state)
            args.push(`-state=${inputs.state}`);
        if (inputs.stateOut)
            args.push(`-state-out=${inputs.stateOut}`);
        if (inputs.target)
            args.push(`-target=${inputs.target}`);
        if (inputs.var) {
            const varMap = new Map(Object.entries(inputs.var));
            for (const key of varMap.keys()) {
                args.push(`-var '${key}=${varMap.get(key)}'`);
            }
        }
        if (inputs.varFile)
            args.push(`-var-file=${inputs.varFile}`);
        if (inputs.dirOrPlan)
            args.push(inputs.dirOrPlan);
        yield exec.exec('terraform', args, setOptions(inputs));
        return inputs;
    });
}
function executeConsole(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeDestroy(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeEnv(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is deprecated. Please use workspace command');
        return inputs;
    });
}
function executeFmt(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeGet(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeGraph(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeImport(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeInit(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        const args = ['init'];
        if ('input' in inputs)
            args.push(`-input=${Boolean(inputs.input)}`);
        if ('lock' in inputs)
            args.push(`-lock=${Boolean(inputs.lock)}`);
        if (inputs.lockTimeout)
            args.push(`-lock-timeout=${+inputs.lockTimeout}`);
        if (inputs.noColor && Boolean(inputs.noColor) === true)
            args.push('-no-color');
        if (inputs.upgrade && Boolean(inputs.upgrade) === true)
            args.push('-upgrade');
        if (inputs.dir)
            args.push(inputs.dir);
        yield exec.exec('terraform', args, setOptions(inputs));
        return inputs;
    });
}
function executeOutput(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executePlan(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        const args = ['plan'];
        if (Boolean(inputs.compactWarnings) === true)
            args.push('-compact-warnings');
        if (Boolean(inputs.destroy) === true)
            args.push('-destroy');
        if (Boolean(inputs.detailedExitCode) === true)
            args.push('-detailed-exitcode');
        if ('input' in inputs)
            args.push(`-input=${Boolean(inputs.input)}`);
        if ('lock' in inputs)
            args.push(`-lock=${Boolean(inputs.lock)}`);
        if (inputs.lockTimeout)
            args.push(`-lock-timeout=${+inputs.lockTimeout}`);
        if (Boolean(inputs.noColor) === true)
            args.push('-no-color');
        if ('out' in inputs)
            args.push(`-out=${inputs.out}`);
        if (inputs.parallelism)
            args.push(`-parallelism=${+inputs.parallelism}`);
        if (inputs.refresh)
            args.push(`-refresh=${Boolean(inputs.refresh)}`);
        if (inputs.state)
            args.push(`-state=${inputs.state}`);
        if (inputs.target)
            args.push(`-target=${inputs.target}`);
        if (inputs.var) {
            const varMap = new Map(Object.entries(inputs.var));
            for (const key of varMap.keys()) {
                args.push(`-var '${key}=${varMap.get(key)}'`);
            }
        }
        if (inputs.varFile)
            args.push(`-var-file=${inputs.varFile}`);
        if (inputs.dir)
            args.push(inputs.dir);
        yield exec.exec('terraform', args, setOptions(inputs));
        return inputs;
    });
}
function executeProviders(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeRefresh(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeShow(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeTaint(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeUntaint(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeValidate(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeVersion(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        yield exec.exec('terraform', ['-version'], setOptions(inputs));
        return inputs;
    });
}
function executeWorkspace(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function execute012Upgrade(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeDebug(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeForceUnlock(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
    });
}
function executeState(inputs) {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('This command is not ready yet. Please check back later.');
        return inputs;
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
            console.debug(`params :  ${terraformInputs}`);
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
                case 'env':
                    terraformOutput = executeEnv(terraformInputs);
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
main();
