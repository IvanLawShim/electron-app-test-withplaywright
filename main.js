const { app, BrowserWindow } = require('electron');
const path = require('path');

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Playwright Windows',
        width: 500,
        height: 500,
        autoHideMenuBar: true
    });

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(()=>{
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
      })
    })
    
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
})