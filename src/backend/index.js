const { ipcMain } = require('electron')
const { exec } = require("child_process");

ipcMain.on('enviar-dados', (event, arg) => {
    

    event.reply('enviar-dados', 'ok')
})

/* const teste = () => {
    exec("robocopy D:\\teste1 D:\\teste2 /E", (error, stdout, stderr) => {
        if (error) {
            if (error.code === 7) {
                console.log(`error código 7: Arquivos foram copiados, uma incompatibilidade de arquivo estava presente e arquivos adicionais estavam presentes. ${error.message}`);
                return;
            }
            if (error.code === 8) {
                console.log(`error código 8: Vários arquivos não copiaram. ${error.message}`);
                return;
            }
        }
        console.log(`stdout: ${stdout}`);
    });
} */