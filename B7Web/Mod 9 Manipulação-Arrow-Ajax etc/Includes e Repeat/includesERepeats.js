//O includes busca um conteudo dentro do array ou strings
//Include no array, busca pelo conteudo exato
let conteudo = ['Felipe', 'Matheus', 'Fraga', 2, 10]

console.log(conteudo.includes('Felipe'))
console.log(conteudo.includes('elipe'))
console.log(conteudo.includes(2))
console.log(conteudo.includes(3))

//Includes em palavra busca por algum conteudo que seja igual
let conteudoLetra = 'Dragão'
console.log(conteudoLetra.includes('D'));console.log(conteudoLetra.includes('d'))

//REPEAT repete o conteudo o numero de vezes definido
console.log('X'.repeat(10))

let nome = 'Teste'
console.log(nome.repeat(20))