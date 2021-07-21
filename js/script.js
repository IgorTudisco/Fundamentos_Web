let nome = document.getElementById('nome')
let habilidade = document.querySelector('#habilidade')
let assunto = document.querySelector('#assunto')
let txtNome = document.querySelector('#txtNome')
let txtHabilidade = document.querySelector('#txtHabilidade')

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
  } else {
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
  }
}

function validaHabilidade() {
  /* Caso exista esse elemento dentro da abilidade ele irá retornar -1 
    é mais usado para validar o email.*/
  if (habilidade.value.indexOf('@') == -1) {
    txtHabilidade.innerHTML = 'Invalido'
    txtHabilidade.style.color = 'red'
  } else {
    txtHabilidade.innerHTML = 'Valido'
    txtHabilidade.style.color = 'green'
  }
}
