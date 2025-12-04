const picocolors = require("picocolors");
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
 * Creates a new folder for the users project
 * @param {string} paths
 * @param {...string} PathOrigin
*/
function NewProjectPathInstance(NewDirName, ...PathOrigin) {
    if (!NewDirName || !PathOrigin || !fs) return;
    const CombinedOrigin = path.join(...PathOrigin);
    (() => {
        if (NewDirName !== null && CombinedOrigin !== null) {
            if ((typeof NewDirName === "string") && (typeof CombinedOrigin === "string")) {
                fs.mkdirSync(path.join(CombinedOrigin, NewDirName));
                fs.readdirSync(path.join(CombinedOrigin, NewDirName));
            }
        }
    });
}

function RemoveFolderPath(DirToRemove, ...PathOrigin) {
    if (!DirToRemove || !PathOrigin || !fs) return;
    if (typeof DirToRemove !== "string" || typeof PathOrigin !== "string") return;
    const IndicatedPath = path.join(...PathOrigin, DirToRemove);
    (() => {
        if (fs.existsSync(IndicatedPath)) {
            fs.rmdirSync(IndicatedPath);
        }
    });
}

module.exports = {
    combinePaths: combinePaths,
    // Project File Manager Functions
    CreateNewFolderInstance: NewProjectPathInstance,
};
