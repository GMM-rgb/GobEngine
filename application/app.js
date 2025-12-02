const path = require("path");
const electron = require("electron");

const BaseApplicationIndex = path.join(__dirname, "..");

electron.app.whenReady().then(() => {
    let ApplicationWindow = new electron.BrowserWindow({
        fullscreenable: true,
        maximizable: true,
        title: "GobEngine"
    });
});
