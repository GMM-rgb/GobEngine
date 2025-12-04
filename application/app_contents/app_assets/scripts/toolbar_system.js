const EditorToolbar = document.querySelector(".application-toolbar");
const toolbarWrapper = document.getElementById("ToolbarWrapper");
/**
 * 
 * @param {HTMLButtonElement} selection_button 
 * @param {boolean} status
 * @returns {Promise<string|boolean?>}
 */
async function openSelectionMenu(selection_button, status) {
    if (selection_button === null || status === null && (typeof status === "boolean" && !(selection_button instanceof HTMLButtonElement))) return null;
    let TargetSelectionsMenus = EditorToolbar.querySelectorAll(".selections-menu-row .toolbar-selections-menu");

    TargetSelectionsMenus.forEach((supposed_target) => {
        if (
            supposed_target instanceof HTMLDivElement &&
            selection_button.getAttribute("id") &&
            supposed_target.getAttribute("name") &&
            selection_button.getAttribute("id").includes(supposed_target.getAttribute("name"))
        ) {
            if (status === false) {
                supposed_target.classList.remove("open");
                console.log("closed");
            } else if (status === true) {
                supposed_target.classList.add("open");
                console.log("opened");
            }
        }
    });

    return (selection_button, status);
}
