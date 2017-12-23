import { app, BrowserWindow, screen, Tray, Menu } from 'electron';
import * as path from 'path';

let win, serve, tray;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

if (serve) {
  require('electron-reload')(__dirname, {
  });
}

function createWindow() {
  const electronScreen = screen;
  let size;

  if (serve) {
    size = {
      height: 600,
      width: 800
    }

  } else {
    app.dock.hide();
    size = {
      height: 600,
      width: 800
    }
  }

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    show: false
  });

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
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  win.on('ready-to-show', () => {
    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    let iconPath;

    if (serve) {
      iconPath = path.join(__dirname, `./assets/${iconName}`);
      win.show();
    } else {
      iconPath = path.join(__dirname, `./assets/${iconName}`);
    }

    // tray = new MdNoteTray(iconPath, win);
    tray = new Tray(iconPath);

    tray.on('click', (event, bounds) => {
      const { x, y } = bounds;
      const { height, width } = win.getBounds();

      if (win.isVisible()) {
        win.hide();
      } else {
        const yPosition = process.platform === 'darwin' ? y : y - height;
        win.setBounds({
          x: x - width / 2,
          y: yPosition,
          height,
          width
        });
        win.show();
      }
    });

    tray.on('right-click', (event) => {
      const menuConfig = Menu.buildFromTemplate([
        {
          label: 'Quit',
          click: () => app.quit()
        }
      ]);

      tray.popUpContextMenu(menuConfig);
    })
  })
}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
