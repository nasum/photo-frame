const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Dialog = electron.dialog
const IpcMain = electron.ipcMain

import path from 'path'
import url from 'url'

//import storage from 'electron-json-storage'

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden'
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  mainWindow.show()
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

IpcMain.on('OPEN_DIRCTORY_DIALOG', () => {
  Dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory', 'multiSelections'],
    filters: [
      {name: 'Images', extensions: ['jpg', 'png', 'gif']}
    ]
  },
  (filePaths) => {
    console.log(filePaths)
  })
})
