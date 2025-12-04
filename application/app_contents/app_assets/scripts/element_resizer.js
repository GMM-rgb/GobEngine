const AppToolbar = document.getElementById("ApplicationToolbarManager");
const EditorCurrentTabsBar = document.getElementById("RenderingArea").querySelector(".taskbar-current-tabs");
const InlineEditorWindows = document.getElementById("RenderingArea").querySelector(".inline-editor-frame");
/**
 * Combines every inputted html elements size; to make one whole number.
 * @param {...HTMLElement} elements
 * @returns {Promise<number?>}
 */
async function combineElementHeightSizes(...elements) {
    let heightTotal = 0;
    //
    try {
        for (const element of elements) {
            if (element !== null && (element instanceof HTMLElement)) {
                const rectDimensions = element.getBoundingClientRect();
                if (rectDimensions instanceof DOMRect) heightTotal += rectDimensions.height;
            } else {
                console.warn('Invalid element passed to combineElementHeightSizes');
                return null;
            }
        }
    } catch (err) {
        console.error("[combineElementHeightSizes][ERROR]\t", err);
        return null;
    }
    //
    return heightTotal;
}

window.addEventListener("resize", (e) => {
    e.stopPropagation();
    //
    let ElementsStackedHeight = Math.floor(combineElementHeightSizes(AppToolbar, EditorCurrentTabsBar, InlineEditorWindows));
}, { passive: true });
