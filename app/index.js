const { app, BrowserWindow, ipcMain } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    let win = new BrowserWindow({
        fullscreen: true,
        icon: './app/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./app/index.html')
}

ipcMain.on('request-app-close', event => {
    app.quit();
});

app.on('ready', createWindow)