const Module = require("module");
const path = require("path");
const fs = require("fs");

/**
 * Combine Paths Function to form a single path from multiple segments
 * @typedef {function(...string): string} CombinePathsFunction
 * @param  {...string} paths 
 * @returns {Promise<string>}
 */
async function combinePaths(include_current_dir, ...paths) {
    let CombinedResult = "";
    if (!paths) return null;
    if (include_current_dir) {
        paths.unshift(__dirname);
    }
    CombinedResult = path.join(...paths);
    return CombinedResult !== null ? CombinedResult : null;
}

module.exports = {
    combinePaths: combinePaths,
};
