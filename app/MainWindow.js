const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(size) {
    super({
      x: 0,
      y: 0,
      width: 800,
      height: 600,
      backgroundColor: '#2e2c29',
      show: false,
      resizable: false,
      fullscreenable: false,
      frame: false,
      title: 'mdNote',

      webPreferences: {
        textAreasAreResizable: false
      }
    });

  }

}

module.exports = MainWindow;
