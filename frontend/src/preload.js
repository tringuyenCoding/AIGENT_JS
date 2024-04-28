const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    openPipeline: () => {
        console.log("openPipeline called");
        ipcRenderer.send('open-pipeline');
    },
    navigateBack: () => {
        console.log("navigateBack called");
        ipcRenderer.send('navigate-back');
    },
    savePipeline: () => {
        console.log("savePipeline called");
        ipcRenderer.send("save-pipeline-request", {
            request: "save_pipeline",
            inputs: {
              path: "path/to/save/pipeline_test.json",
            },
          });
    },
    addModule: (id_name,file_Python ,module_name) => {
        console.log("addModule called");
        ipcRenderer.send('add-module', {
            request: "add_module",
            inputs: {
                key: id_name,
                type: file_Python,
                module: module_name,
            },
        });
    },
    setHyperparameters: (id_name,hyperparameters) => {
        console.log("set_hyperparameters called");
        ipcRenderer.send('set-module-hyperparameters', {
            request: "set_module_hyperparameters",
            inputs: {
                key: id_name,
                hyperparameters: hyperparameters,
            },
        });
    },
    removeModule: (id_name) => {
        console.log("removeModule called");
        ipcRenderer.send('remove-module', {
            request: "remove_module",
            inputs: {
                key: id_name,
            },
        });
    },
    runPipeline: () => {
        console.log("runPipeline called");
        ipcRenderer.send('run',{
            request: "run",
            inputs:{},
        });
    },

});

