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
const artifact = __importStar(require("@actions/artifact"));
const io = __importStar(require("@actions/io"));
const uuid = __importStar(require("uuid"));
const core = __importStar(require("@actions/core"));
const fs = __importStar(require("fs"));
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
function uploadFile(upload, file, rootDir, artifactName, uploadOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (upload) {
            if (artifactName) {
                core.error('Artifact name is required');
                return;
            }
            if (!rootDir) {
                core.error('Root dir is required when uploading a file');
                return;
            }
            const artifactClient = artifact.create();
            if (file) {
                const files = [];
                files.push(file);
                const uploadResult = yield artifactClient.uploadArtifact(artifactName, files, rootDir, uploadOptions);
                core.setOutput('uploadResult', `${uploadResult}`);
            }
            else {
                core.setFailed('Output file is required when upload is true');
            }
        }
        else {
            core.info('upload flag is false');
        }
    });
}
exports.uploadFile = uploadFile;
function uploadDataAsFile(upload, data, fileName, artifactName, uploadOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (upload) {
            if (artifactName) {
                core.error('Artifact name is required');
                return;
            }
            if (!fileName) {
                core.error('File name is required when uploading data');
                return;
            }
            const artifactClient = artifact.create();
            const randomFolder = uuid.v4();
            if (data) {
                io.mkdirP(randomFolder);
                const filePath = `./${randomFolder}/fileName`;
                fs.appendFileSync(filePath, data);
                const files = [];
                files.push(filePath);
                const uploadResult = yield artifactClient.uploadArtifact(artifactName, files, ".", uploadOptions);
                core.setOutput('uploadResult', `${uploadResult}`);
            }
            else {
                core.setFailed('Data to be uploaded is undefined');
            }
            try {
                io.rmRF(`./${randomFolder}`);
            }
            catch (error) {
                core.error('Error deleting temporary file');
            }
        }
        else {
            core.info('upload flag is false');
        }
    });
}
exports.uploadDataAsFile = uploadDataAsFile;
