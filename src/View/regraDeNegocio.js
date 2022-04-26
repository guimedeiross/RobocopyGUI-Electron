const enviarDados = () => {
  const dados = {}
  const inputOrigem = document.querySelector('#inputOrigem').value
  const inputDestino = document.querySelector('#inputDestino').value
  const checkboxes = document.querySelectorAll('input[type=checkbox]')
  const fields = document.querySelectorAll('input, label')
  let fieldsHidden = []
  fields.forEach(e => {
    if (e.hasAttribute('hidden')) {
      fieldsHidden.push(e)
    }
  })
  dados.inputOrigem = inputOrigem
  dados.inputDestino = inputDestino
  dados.checkboxes = checkboxes
  dados.fieldsHidden = fieldsHidden
  Object.freeze(dados)
  validacao(dados)
}

const validacao = dados => {
  console.log(dados)
}