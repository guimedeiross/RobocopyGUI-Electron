const { ipcRenderer } = require('electron')

const verificaCheckBox = e => {
    checkboxId = e.target.id
    switch (checkboxId) {
        case 'checkbox-log':
            e.target.checked ? document.querySelector("#inputLog").classList.remove('hidden') : document.querySelector("#inputLog").classList.add('hidden')
            break;
        case 'checkboxMT':
            e.target.checked ? document.querySelector("#labelMT").classList.remove('hidden') : document.querySelector("#labelMT").classList.add('hidden')
            e.target.checked ? document.querySelector("#inputMT").classList.remove('hidden') : document.querySelector("#inputMT").classList.add('hidden')
            break;
        case 'checkboxExcluirDir':
            e.target.checked ? document.querySelector("#inputExcluirDir").classList.remove('hidden') : document.querySelector("#inputExcluirDir").classList.add('hidden')
            break;
        case 'checkboxExcluirArquivos':
            e.target.checked ? document.querySelector("#inputExcluirArquivos").classList.remove('hidden') : document.querySelector("#inputExcluirArquivos").classList.add('hidden')
            break;
    }
}

document.querySelector('#checkbox-log').addEventListener("change", e => verificaCheckBox(e))
document.querySelector('#checkboxMT').addEventListener("change", e => verificaCheckBox(e))
document.querySelector('#checkboxXJD').addEventListener("change", e => verificaCheckBox(e))
document.querySelector('#checkboxXJF').addEventListener("change", e => verificaCheckBox(e))
document.querySelector('#checkboxExcluirDir').addEventListener("change", e => verificaCheckBox(e))
document.querySelector('#checkboxExcluirArquivos').addEventListener("change", e => verificaCheckBox(e))

const enviarDados = event => {
    event.preventDefault()
    const inputOrigem = document.querySelector('#inputOrigem').value
    const inputDestino = document.querySelector('#inputDestino').value
    ipcRenderer.send('enviar-dados', 'pong')
    ipcRenderer.once('enviar-dados', (event, resp) => {
        console.log(resp)
    })
}