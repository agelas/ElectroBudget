const ps = require("process");
const { app, BrowserWindow, ipcMain, screen: electronScreen } = require("electron");
const path = require("path");
const fs = require("fs");

const createMainWindow = () => {
    let mainWindow = new BrowserWindow({
        width: electronScreen.getPrimaryDisplay().workArea.width,
        height: electronScreen.getPrimaryDisplay().workArea.height,
        show: false,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "./preload.ts"),
        },
    });
    const startURL = "http://localhost:3000";

    mainWindow.loadURL(startURL);

    mainWindow.once("ready-to-show", () => mainWindow.show());

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    ipcMain.on("request-Data", (event, args) => {
        const filepath = path.join(__dirname, "../src/SampleData/data.json");
        if (fs.existsSync(filepath)) {
            fs.readFile(filepath, (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    mainWindow.webContents.send("local-Data", JSON.parse(data));
                }
            });
        } else {
            //BrowserWindow.webContents.send("local-Data", 'NO FILE');
            console.log(ps.cwd() + "\\SampleData\\data.json");
        }
    });

    ipcMain.handle("saveData", async (event, data) => {
        try {
            fs.writeFileSync(path.resolve(__dirname, "../src/SampleData/data.json"), JSON.stringify(data));
            return { success: true };
        } catch (error) {
            console.error("Failed to save data: ", error);
            return { success: false, error };
        }
    });
};

app.whenReady().then(() => {
    createMainWindow();

    app.on("activate", () => {
        if (!BrowserWindow.getAllWindows().length) {
            createMainWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
