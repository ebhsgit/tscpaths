"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = exports.mapPaths = void 0;
const path_1 = require("path");
exports.mapPaths = (paths, mapper) => {
    const dest = {};
    Object.keys(paths).forEach((key) => {
        dest[key] = paths[key].map(mapper);
    });
    return dest;
};
exports.loadConfig = (file) => {
    const requireJSON5 = require('require-json5');
    const { extends: ext, compilerOptions: { baseUrl, outDir, paths } = {
        baseUrl: undefined,
        outDir: undefined,
        paths: undefined,
    }, } = requireJSON5(file);
    const config = {};
    if (baseUrl) {
        config.baseUrl = baseUrl;
    }
    if (outDir) {
        config.outDir = outDir;
    }
    if (paths) {
        config.paths = paths;
    }
    if (ext) {
        const parentConfig = exports.loadConfig(path_1.resolve(path_1.dirname(file), ext));
        return Object.assign(Object.assign({}, parentConfig), config);
    }
    return config;
};
//# sourceMappingURL=util.js.map