require('electron-reload')(__dirname);
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 400
  });

  if (process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }

  win.webContents.openDevTools();
  win.on('close', () => win = null)
}

app.on('ready', createWindow);

app.on('active', () => win && createWindow());

app.on('window-all-close', () => process.platform !== 'darwin' && app.quit());
