const path = require("path");
const electron = require("electron");

let BaseApplicationIndex = path.join(__dirname, "app_contents");
let ApplicationIndexFile = path.join(BaseApplicationIndex, "index.html");
let ApplicationIconFile = path.join(BaseApplicationIndex, "app_assets", "images", "icons", "favicon_main.svg");

electron.app.whenReady().then(() => {
    let ApplicationWindow = new electron.BrowserWindow({
        title: "GobEngine",
        icon: ApplicationIconFile,
        fullscreenable: true,
        maximizable: true,
        innerHeight: 500,
        innerWidth: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true
        },
        autoHideMenuBar: true,
    });
    ApplicationWindow.loadFile(ApplicationIndexFile);
});
