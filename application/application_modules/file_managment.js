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
    if (!paths) return ".";
    if (include_current_dir) {
        paths.unshift(__dirname);
    }
    CombinedResult = path.join(...paths);
    return CombinedResult !== null ? CombinedResult : ".";
}

/** 
 * 
 * @param {string} paths
 * @param {...string} pathOrigin
*/
function NewProjectPathInstance(dirName, ...pathOrigin) {
    if (!dirName || !fs) return;

    let CombinedOrigin = path.join(...pathOrigin);

    (() => {
        if (dirName !== null && CombinedOrigin !== null) {
            if ((typeof dirName === "string") && (typeof CombinedOrigin === "string")) {
                fs.mkdirSync(path.join(CombinedOrigin, dirName));
            }
        }
    });
}

module.exports = {
    combinePaths: combinePaths,
    // Project File Manager Functions
    CreateNewFolderInstance: NewProjectPathInstance,
};
