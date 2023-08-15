let info = ['Felipe', 'Matheus', 'Fraga', '@Felipe']

let info2 = ['Felipe', 'Matheus', 'Fraga', '@Felipe']
//ele segue a sequencia do conteudo
let [nome, sobrenome, sobresobrenome, insta] = info
//para pular conteudo é só por ,, vazia
let [nome2,, sobresobrenome2, insta2] = info2

console.log(nome, sobrenome, sobresobrenome, insta)

console.log(nome2, sobresobrenome2, insta2)

//OU COM FUNÇÃO
function criar() {
    return[1,2,3]
}

let [a,b,c] = criar()

console.log(a,b,c)