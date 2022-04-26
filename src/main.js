const { app, BrowserWindow } = require('electron')
require('./backend')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 575,
    height: 620,
    title: "Robocopy GUI",
    resizable: false,
    icon: 'View/MainScreen/assets/icone-powershell.png',
    webPreferences: {
      nodeIntegration:true,
      contextIsolation: false
    }
  })
  win.loadFile('View/MainScreen/index.html')
  //win.removeMenu(true)
}

app.whenReady().then(() => {
    createWindow()
})