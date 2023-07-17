const { contextBridge, ipcRenderer } = require("electron");

const API = {
    localData: () => new Promise((resolve) => ipcRenderer.once("local-Data", (_event, data) => resolve(data))),
    requestData: (msg) => ipcRenderer.send("request-Data", msg),
    saveData: (data) => ipcRenderer.invoke("saveData", data),
};

contextBridge.exposeInMainWorld("api", API);
