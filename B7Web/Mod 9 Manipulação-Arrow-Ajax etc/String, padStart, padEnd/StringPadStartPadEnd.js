let tel = '3599853'
//PadEnd preenche o restante faltante com o conteudo selecionado, exemplo abaixo, a parte do conteudo que for menor q 10 caracteres, preencher com *
console.log(tel.padEnd(10, '*'))
console.log(tel.padEnd(13, '*'))

//PadStart faz no começo
console.log(tel.padStart(10, '*'))
console.log(tel.padStart(13, '*'))

//Ocultando números do final do cartão
let cartao = '123456456123456'
let ultimosDigitos = cartao.slice(-4)
let cartaoMascarado = ultimosDigitos.padStart(15, '*')

console.log('O número do seu cartão é: ' + cartaoMascarado)

//Ocultando números do inicio do cartão
let cartao2 = '123456456123456'
let ultimosDigitos2 = cartao.slice(0, 4)
let cartaoMascarado2 = ultimosDigitos.padEnd(15, '*')

console.log('O número do seu cartão é: ' + cartaoMascarado2)