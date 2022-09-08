const { contextBridge, ipcRenderer } = require('electron');


const API = {
    localData: (callback) => ipcRenderer.on("local-Data", (callback)),
    
    requestData: (msg) => ipcRenderer.send("request-Data", msg)
}

contextBridge.exposeInMainWorld("api", API);