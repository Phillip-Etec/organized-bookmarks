const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");

const loadMainWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			nodeIntegration: true
		},
		autoHideMenuBar: true,
	});

	mainWindow.loadFile(path.join(__dirname, "index.html"));
}

app.on("ready", loadMainWindow);

app.on("window-all-closed", () => {
	if(process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if(BrowserWindow.getAllWindows().length === 0) {
		loadMainWindow();
	}
});
