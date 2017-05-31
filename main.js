const { app, BrowserWindow } = require('electron');

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 100,
    height: 100
  });

  win.loadURL('http://localhost:4200');
  win.webContents.openDevTools();
  win.on('close', () => win = null)
}

app.on('ready', createWindow);

app.on('active', () => win && createWindow());

app.on('window-all-close', () => process.platform !== 'darwin' && app.quit());
