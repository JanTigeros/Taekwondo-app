const { app, BrowserWindow } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    let win = new BrowserWindow({
        width: 600,
        height: 380,
        resizable: false,
        alwaysOnTop: true,
        icon: './app/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./app/index.html')
}

app.on('ready', createWindow)