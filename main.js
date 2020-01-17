const { app, BrowserWindow, ipcMain } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    let win = new BrowserWindow({
        fullscreen: true,
        icon: './icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./index.html')
}

ipcMain.on('request-app-close', event => {
    app.quit();
});

app.on('ready', createWindow)