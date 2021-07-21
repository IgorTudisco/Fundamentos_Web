let nome = document.getElementById('nome')
let habilidade = document.querySelector('#habilidade')
let assunto = document.querySelector('#assunto')
let txtNome = document.querySelector('#txtNome')
let txtHabilidade = document.querySelector('#txtHabilidade')
let txtAssunto = document.querySelector('#txtAssunto')
let mapa = document.querySelector('#mapa')

// váriavel para validar o envio

let nomeOk = false
let habilidadeOk = false
let assuntoOk = false

function validaNome() {
  let verificaNum = !isNaN(nome.value)
  let stringNum
  for (let i = 0; i < nome.value.length; i++) {
    let stringNumTrue = !isNaN(nome.value[i])
    if (stringNumTrue) {
      stringNum = stringNumTrue
      console.log(stringNum)
    }
  }

  if (nome.value.length < 3 || verificaNum || stringNum) {
    txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = 'red'
    nomeOk = false
  } else {
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

function validaHabilidade() {
  /* Caso exista esse elemento dentro da abilidade ele irá retornar -1 
    é mais usado para validar o email.*/
  if (
    habilidade.value.indexOf('@') == -1 ||
    habilidade.value.indexOf('.') == -1
  ) {
    txtHabilidade.innerHTML = 'Invalido'
    txtHabilidade.style.color = 'red'
    habilidadeOk = false
  } else {
    txtHabilidade.innerHTML = 'Valido'
    txtHabilidade.style.color = 'green'
    habilidadeOk = true
  }
}

function validaAssunto() {
  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
    assuntoOk = false
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function validaEnvio() {
  if (nomeOk && habilidadeOk && assuntoOk) {
    alert('Formulário enviado')
  } else {
    alert('Preencha o formulário corretamente antes de enviar...')
  }
}

function zoomMapa() {
  mapa.style.width = '70%'
}

function zoomNomalMapa() {
  mapa.style.width = '35%'
}
