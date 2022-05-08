
const { ipcRenderer } = require('electron')
let dados = {
    inputOrigem: '',
    inputDestino: '',
    inputLog: '',
    inputMT: '',
    checkboxXJD: '',
    inputExcluirDir: '',
    inputExcluirArquivos: ''
}

const verificaCheckBox = e => {
    checkboxId = e.target.id
    switch (checkboxId) {
        case 'checkbox-log':
            const inputLog = document.querySelector("#inputLog")
            e.target.checked ? acaoQuandoCheckboxChecado(inputLog, true) : acaoQuandoCheckboxChecado(inputLog, false)
            break;
        case 'checkboxMT':
            const labelMT = document.querySelector("#labelMT")
            const inputMT = document.querySelector("#inputMT")
            e.target.checked ? acaoQuandoCheckboxChecado(labelMT, true) : acaoQuandoCheckboxChecado(labelMT, false)
            e.target.checked ? acaoQuandoCheckboxChecado(inputMT, true) : acaoQuandoCheckboxChecado(inputMT, false)
            break;
        case 'checkboxXJD':
            const checkboxXJD = document.querySelector('#checkboxXJD')
            e.target.checked ? acaoQuandoCheckboxChecado(checkboxXJD, true) : acaoQuandoCheckboxChecado(checkboxXJD, false)
            break;
        case 'checkboxXJF':
            const checkboxXJF = document.querySelector('#checkboxXJF')
            e.target.checked ? acaoQuandoCheckboxChecado(checkboxXJF, true) : acaoQuandoCheckboxChecado(checkboxXJF, false)
            break;
        case 'checkboxExcluirDir':
            const inputExcluirDir = document.querySelector("#inputExcluirDir")
            e.target.checked ? acaoQuandoCheckboxChecado(inputExcluirDir, true) : acaoQuandoCheckboxChecado(inputExcluirDir, false)
            break;
        case 'checkboxExcluirArquivos':
            const inputExcluirArquivos = document.querySelector("#inputExcluirArquivos")
            e.target.checked ? acaoQuandoCheckboxChecado(inputExcluirArquivos, true) : acaoQuandoCheckboxChecado(inputExcluirArquivos, false)
            break;
    }
}

const verificaCheckBoxSemInputOuLabel = elementoPaginaID => {
    let valida = false
    elementoPaginaID === 'checkboxXJD' || elementoPaginaID === 'checkboxXJF' ? valida = true : valida = false
    return valida
}

const acaoQuandoCheckboxChecado = (elementoPagina, checado) => {
    const elementoPaginaID = elementoPagina.id
    const validacao = verificaCheckBoxSemInputOuLabel(elementoPaginaID)
    if (checado) {
        validacao ? dados[elementoPaginaID] = 'check' : ''
        elementoPagina.classList.remove('hidden')
        if (elementoPagina.tagName === 'INPUT') {
            verificaCheckBoxSemInputOuLabel(elementoPaginaID) ? '' : dados[elementoPaginaID] = elementoPagina.value
            elementoPagina.addEventListener('input', e => dados[elementoPaginaID] = e.target.value)
        }
    } else {
        if (validacao) {
            dados[elementoPaginaID] = 'noCheck'
        } else {
            elementoPagina.classList.add('hidden')
        }
    }
}

document.querySelector('#checkbox-log').addEventListener("change", verificaCheckBox)
document.querySelector('#checkboxMT').addEventListener("change", verificaCheckBox)
document.querySelector('#checkboxXJD').addEventListener("change", verificaCheckBox)
document.querySelector('#checkboxXJF').addEventListener("change", verificaCheckBox)
document.querySelector('#checkboxExcluirDir').addEventListener("change", verificaCheckBox)
document.querySelector('#checkboxExcluirArquivos').addEventListener("change", verificaCheckBox)

const enviarDados = event => {
    event.preventDefault()
    const inputOrigem = document.querySelector('#inputOrigem').value
    const inputDestino = document.querySelector('#inputDestino').value
    dados.inputOrigem = inputOrigem
    dados.inputDestino = inputDestino
    ipcRenderer.send('enviar-dados', dados)
    ipcRenderer.once('enviar-dados', (event, resp) => {
        console.log(resp)
    })
}
