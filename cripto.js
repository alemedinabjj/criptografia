const tela = (document.querySelector('.tela').innerHTML = loading)

function criptografar() {
  event.preventDefault()
  let name = document.querySelector('#cripto')
  let texto = name.value
  if (texto.length <= 0) {
    alert('Digite algo para ser criptografado')
  } else {
    let criptografada = ''
    for (let i = 0; i < texto.length; i++) {
      criptografada += String.fromCharCode(texto.charCodeAt(i) + 1)
    }
    setTimeout(() => {
      document.querySelector(
        '.tela'
      ).innerHTML = `<h1 class="title">${criptografada}</h1>`
    }, 1000)
  }
}


function descriptografar() {
  event.preventDefault()
  let name = document.querySelector('#descripto')
  let texto = name.value
  let descriptografada = ''
  for (let i = 0; i < texto.length; i++) {
    descriptografada += String.fromCharCode(texto.charCodeAt(i) - 1)
  }
  document.querySelector(
    '.tela'
  ).innerHTML = `<h1 class="title">${descriptografada}</h1>`
}

// function criptografarDescriptografar(frase, opcao) {
//   if (opcao == 'criptografar') {
//     return criptografar(frase)
//   } else {
//     return descriptografar(frase)
//   }
// }

// console.log(criptografarDescriptografar('abc', 'criptografar'))
