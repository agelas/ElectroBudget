const { contextBridge, ipcRenderer } = require('electron');


const API = {
    localData: (callback) => ipcRenderer.on("local-Data", (event, args) => {
        callback((args) => {});
    }),
    localRoute: (callback) => ipcRenderer.on("local-Route", (event, args) => {
        callback(args);
    }),
    requestData: (msg) => ipcRenderer.send("request-Data", msg)
}

contextBridge.exposeInMainWorld("api", API);