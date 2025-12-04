const picocolors = require("picocolors");
const path = require("path");
const socket = require("socket.io");
const express = require("express");
const electron = require("electron");
const http = require("http");
// Constant variables
const PORT = 72;

const FileManager = require(path.join(__dirname, "application_modules", "file_managment.js"));

const app = express();
const server = http.createServer(app);
// Setup the game engines communications with the system
const io = new socket.Server(server, {
    cors: {
        origin: "http://localhost:72",
        methods: ["GET", "POST"]
    }
});

let BaseApplicationIndex = path.join(__dirname, "app_contents");
let ApplicationIndexFile = path.join(BaseApplicationIndex, "index.html");
let ApplicationIconFile = path.join(BaseApplicationIndex, "app_assets", "images", "icons", "favicon_main.png");

// Serve all static files from app_contents directory
app.use(express.static(BaseApplicationIndex));

// Serve index.html at root
app.get('/', (req, res) => {
    res.sendFile(ApplicationIndexFile);
});

electron.app.whenReady().then(() => {
    let ApplicationWindow = new electron.BrowserWindow({
        title: "GobEngine",
        icon: ApplicationIconFile,
        fullscreenable: true,
        maximizable: true,
        width: 1000,  // Fixed property name
        height: 800, // Fixed property name
        minWidth: 700,
        minHeight: 500,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    ApplicationWindow.loadURL("http://localhost:72");
    ApplicationWindow.setIcon(ApplicationIconFile);
}).then(() => {
    console.log()
});

server.listen(PORT, () => {
    console.log(picocolors.green(`Built-in Server listening on localhost?*:${PORT}`));
});
