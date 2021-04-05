import { app, BrowserWindow } from 'electron';
import Main from './Main';
try {
    require('electron-reloader')(module)
    console.log("electron-reloader hooked  123 really? what")
} catch (_) { }

Main.main(app, BrowserWindow);