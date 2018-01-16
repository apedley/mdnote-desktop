const electron = require('electron');
const { Menu, MenuItem, app } = electron;


function appMenu() {

  const template = [
    {
      label: 'Edit',
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'pasteandmatchstyle'},
        {role: 'delete'},
        {role: 'selectall'}
      ]
    },
    {
      label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'},
      ]
    },
    {
      role: 'window',
      submenu: [
        {role: 'hide'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('https://github.com/apedley/mdnote') }
        }
      ]
    }
  ]

  if (process.platform === 'darwin') {
    template.unshift({
      // label: app.getName(),
      label: 'mdNote',
      submenu: [
        {role: 'about'},
        {type: 'separator'},
        {role: 'services', submenu: []},
        {type: 'separator'},
        {role: 'hide'},
        {role: 'hideothers'},
        {role: 'unhide'},
        {type: 'separator'},
        {role: 'quit'}
      ]
    })

    // // Edit menu
    // template[1].submenu.push(
    //   {type: 'separator'},
    //   {
    //     label: 'Speech',
    //     submenu: [
    //       {role: 'startspeaking'},
    //       {role: 'stopspeaking'}
    //     ]
    //   }
    // )

    // Window menu
  //   template[3].submenu = [
  //     {role: 'close'},
  //     {role: 'minimize'},
  //     {role: 'zoom'},
  //     {type: 'separator'},
  //     {role: 'front'}
  //   ]

  }

  const menu = Menu.buildFromTemplate(template)
  return menu;
}

exports.appMenu = appMenu;
