const path = require("path");
const electron = require("electron");

const FileManager = require(path.join(__dirname, "application_modules", "file_managment.js"));

let BaseApplicationIndex = path.join(__dirname, "app_contents");
let ApplicationIndexFile = path.join(BaseApplicationIndex, "index.html");
let ApplicationIconFile = path.join(BaseApplicationIndex, "app_assets", "images", "icons", "favicon_main.png");

electron.app.whenReady().then(() => {
    let ApplicationWindow = new electron.BrowserWindow({
        title: "GobEngine",
        icon: ApplicationIconFile,
        fullscreenable: true,
        maximizable: true,
        innerHeight: 500,
        innerWidth: 800,
        minWidth: 400,
        minHeight: 300,
        autoHideMenuBar: true,
        roundedCorners: true,
        useContentSize: true,
        webPreferences: {
            media: true,
            enablePreferredSizeMode: true,
            nodeIntegration: true,
            contextIsolation: false,
            partition: "gobengine_app_partition",
        },
    });
    ApplicationWindow.loadFile(ApplicationIndexFile);
    ApplicationWindow.setIcon(ApplicationIconFile);
});
