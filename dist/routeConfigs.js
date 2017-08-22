"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Yaml = require("yamljs");
const Fs = require("fs");
class RouteConfig {
    constructor() {
        this.Configs = this.readConfig();
    }
    retrieveConfigs() {
        let files = Fs.readdirSync('../config/');
        return files;
    }
    readConfig() {
        const Files = this.retrieveConfigs();
        let currentFile;
        let yamlFile;
        for (let file of Files) {
            if (file.match(/yml/)) {
                currentFile = file;
            }
        }
        return yamlFile = Yaml.load(`../config/${currentFile}`);
    }
}
exports.default = RouteConfig;
//# sourceMappingURL=routeConfigs.js.map