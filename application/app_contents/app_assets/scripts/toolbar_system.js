const toolbar = document.querySelector(".application-toolbar");
const toolbarWrapper = document.getElementById("ToolbarWrapper");
/**
 * 
 * @param {HTMLButtonElement} selection_button 
 * @param {boolean} status
 * @returns {string|boolean?}
 */
function openSelectionMenu(selection_button, status) {
    if (!selection_button || !status && (typeof status === "boolean" && (selection_button instanceof HTMLButtonElement))) return null;

    let TargetSelectionsMenus = document.querySelectorAll(".toolbar-selections-menu");
    TargetSelectionsMenus.forEach((supposed_target) => {
        if (supposed_target !== null && (supposed_target instanceof HTMLElement) && supposed_target.getAttribute("name") === selection_button.getAttribute("id").search(supposed_target.getAttribute("name"))) {
            
        }
    });

    return(selection_button, status);
}
