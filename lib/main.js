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
const terraform_commands_1 = require("./terraform.commands");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.env.CUSTOM_TERRAFORM_LOCATION)
            TERRAFORM_VERSION = process.env.CUSTOM_TERRAFORM_LOCATION;
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
                    terraformOutput = terraform_commands_1.executeApply(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'console':
                    terraformOutput = terraform_commands_1.executeConsole(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'destroy':
                    terraformOutput = terraform_commands_1.executeDestroy(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'fmt':
                    terraformOutput = terraform_commands_1.executeFmt(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'get':
                    terraformOutput = terraform_commands_1.executeGet(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'graph':
                    terraformOutput = terraform_commands_1.executeGraph(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'import':
                    terraformOutput = terraform_commands_1.executeImport(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'init':
                    terraformOutput = terraform_commands_1.executeInit(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'output':
                    terraformOutput = terraform_commands_1.executeOutput(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'plan':
                    terraformOutput = terraform_commands_1.executePlan(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'providers':
                    terraformOutput = terraform_commands_1.executeProviders(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'refresh':
                    terraformOutput = terraform_commands_1.executeRefresh(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'show':
                    terraformOutput = terraform_commands_1.executeShow(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'taint':
                    terraformOutput = terraform_commands_1.executeTaint(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'untaint':
                    terraformOutput = terraform_commands_1.executeUntaint(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'validate':
                    terraformOutput = terraform_commands_1.executeValidate(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'version':
                    terraformOutput = terraform_commands_1.executeVersion(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'workspace':
                    terraformOutput = terraform_commands_1.executeWorkspace(TERRAFORM_VERSION, terraformInputs);
                    break;
                case '0.12upgrade':
                    terraformOutput = terraform_commands_1.execute012Upgrade(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'debug':
                    terraformOutput = terraform_commands_1.executeDebug(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'force-unlock':
                    terraformOutput = terraform_commands_1.executeForceUnlock(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'state':
                    terraformOutput = terraform_commands_1.executeState(TERRAFORM_VERSION, terraformInputs);
                    break;
                case 'download':
                    terraformOutput = terraform_commands_1.executeDownload(TERRAFORM_VERSION, terraformInputs);
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
let TERRAFORM_VERSION = 'terraform';
main();
