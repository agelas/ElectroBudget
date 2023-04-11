const { contextBridge, ipcRenderer } = require('electron');


const API = {
    localData: () => new Promise((resolve) => ipcRenderer.once("local-Data", (_event, data) => resolve(data))),
    requestData: (msg) => ipcRenderer.send("request-Data", msg),
  };

contextBridge.exposeInMainWorld("api", API);