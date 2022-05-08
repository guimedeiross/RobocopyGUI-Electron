const { ipcMain } = require('electron')
const { exec } = require('child_process')

ipcMain.on('enviar-dados', (event, arg) => {

    chamaRobocopy(arg)
    
    event.reply('enviar-dados', 'ok')
})

/* const validacao = dados => {
    const { inputOrigem, inputDestino, inputLog, inputMT, checkboxXJD, inputExcluirDir, inputExcluirArquivos } = dados
} */

const chamaRobocopy = dados => {
    const { inputOrigem, inputDestino, inputLog, inputMT, checkboxXJD, inputExcluirDir, inputExcluirArquivos, checkboxXJF } = dados
    let robocopyDefault = `robocopy ${inputOrigem} ${inputDestino} /E`

    if(inputLog !== '') {
        robocopyDefault = robocopyDefault + ` /LOG:${inputLog}`
        executaRobocopy(robocopyDefault, (result) => console.log(result))
    }
    if(inputMT !== '') {
        robocopyDefault = robocopyDefault + ` /MT:${inputMT}`
        executaRobocopy(robocopyDefault, (result) => console.log(result))
    }
    if(checkboxXJD === 'check') {
        robocopyDefault = robocopyDefault + ` /XJD`
        executaRobocopy(robocopyDefault, (result) => console.log(result))
    }
    if(checkboxXJF === 'check') {
        robocopyDefault = robocopyDefault + ` /XJF`
        executaRobocopy(robocopyDefault, (result) => console.log(result))
    }
    if(inputExcluirDir !== '') {
        
        robocopyDefault = robocopyDefault + ` /XJF`
        executaRobocopy(robocopyDefault, (result) => console.log(result))
    }
    if(inputExcluirArquivos !== '') {
        robocopyDefault = robocopyDefault + ` /XJF`
        executaRobocopy(robocopyDefault, (result) => console.log(result))
    }
}

const executaRobocopy = (comando, cb) => {
        exec(comando, (error, stdout, stderr) => {
        if (error) {
            if (error.code === 7) {
                cb(`error código 7: Arquivos foram copiados, uma incompatibilidade de arquivo estava presente e arquivos adicionais estavam presentes. ${error.message}`)
                return
            }
            if (error.code === 8) {
                cb(`error código 8: Vários arquivos não copiaram. ${error.message}`)
                return
            }
        }
        cb(`${stdout}`)
    })
}