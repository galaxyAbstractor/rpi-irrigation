const {app, BrowserWindow, ipcMain} = require('electron');

import PlantUnit from "./PlantUnit";

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 480,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/../app/index.html`);

    win.setFullScreen(true);

    const plantUnit1 = new PlantUnit(win, 0, 0x36, 25);
}

app.whenReady().then(createWindow);

