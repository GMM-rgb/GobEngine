const path = require("path");
const electron = require("electron");

const BaseApplicationIndex = path.join(__dirname, "app_contents");
const ApplicationIconFile = path.join(BaseApplicationIndex, "app_assets", "images", "");
const ApplicationIndexFile = path.join(BaseApplicationIndex, "index.html");

electron.app.whenReady().then(() => {
    let ApplicationWindow = new electron.BrowserWindow({
        fullscreenable: true,
        maximizable: true,
        title: "GobEngine",
        innerHeight: 500,
        innerWidth: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: ""
    });
    ApplicationWindow.loadFile(ApplicationIndexFile);
});
