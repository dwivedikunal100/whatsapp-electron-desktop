const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;


var menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
        submenu: [
            { label: 'Hide', click() { app.hide() } },
            { label: 'Quit', click() { app.quit() } },
        ]
    }, {
        label: 'Edit',
        submenu: [
            {
                label: 'Undo',
                accelerator: 'Command+Z',
                selector: 'undo:'
            },
            {
                label: 'Redo',
                accelerator: 'Shift+Command+Z',
                selector: 'redo:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Cut',
                accelerator: 'Command+X',
                selector: 'cut:'
            },
            {
                label: 'Copy',
                accelerator: 'Command+C',
                selector: 'copy:'
            },
            {
                label: 'Paste',
                accelerator: 'Command+V',
                selector: 'paste:'
            },
            {
                label: 'Select All',
                accelerator: 'Command+A',
                selector: 'selectAll:'
            },
        ]
    }
])
Menu.setApplicationMenu(menu);
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        title: 'Whatsapp',
        webPreferences: {
            nodeIntegration: false,
            devTools: false
        }
    });
    mainWindow.loadURL('https://web.whatsapp.com', { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36' });
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
