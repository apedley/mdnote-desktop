import { app, BrowserWindow, screen, Tray, Menu, Notification } from 'electron';
const MainWindow = require('./app/MainWindow');
const MdnoteTray = require('./app/MdnoteTray');
const MenuBuilder = require('./app/MenuBuilder');

import * as path from 'path';

let win, serve, tray;


// let win, serve;

const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

if (serve) {
  require('electron-reload')(__dirname, {
  });
}



function createWindow() {
  const electronScreen = screen;

  // Create the browser window.
  win = new MainWindow();

  if (serve) {
    BrowserWindow.addDevToolsExtension('/Users/andrew/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0');
  }

  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null;
  });

  win.on('close', (event) => {
    if (!serve) {
      event.preventDefault();
    }
    win.hide();
  });

  win.on('ready-to-show', () => {
    const iconName = process.platform === 'win32' ? 'pencil-windows.png' : 'pencil.png';
    let iconPath;

    if (serve) {
      iconPath = path.join(__dirname, `./assets/${iconName}`);
      win.show();
    } else {
      iconPath = path.join(__dirname, `./assets/${iconName}`);
    }

    tray = new MdnoteTray(iconPath, win);

    const notify = new Notification({
      title: 'Hello',
      body: 'Activation notification.'
    });
    notify.show();
  })
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', () => {


    createWindow();

    const appMenu = MenuBuilder.appMenu();

    Menu.setApplicationMenu(appMenu);


  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        // app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    // if (win === null) {
    //   win = createWindow();
    // }


  });



} catch (e) {
  // Catch Error
  // throw e;
}
