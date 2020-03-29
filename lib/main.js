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
// import * as exec from '@actions/exec'
function executeApply(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeConsole(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeDestroy(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeEnv(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeFmt(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeGet(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeGraph(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeImport(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeInit(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeOutput(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executePlan(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeProviders(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeRefresh(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeShow(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeTaint(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeUntaint(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeValidate(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeVersion(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeWorkspace(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function execute012Upgrade(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeDebug(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeForceUnlock(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function executeState(inputs) {
    core.info('This command is not ready yet. Please check back later.');
    return inputs;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const terraformCommand = core.getInput('command');
            let terraformInputs = {};
            if (null != core.getInput('params') || core.getInput('params') !== '') {
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
            core.setOutput("commandOutput", JSON.stringify(terraformOutput));
        }
        catch (error) {
            core.info(error);
            core.setFailed(error.message);
        }
    });
}
main();
