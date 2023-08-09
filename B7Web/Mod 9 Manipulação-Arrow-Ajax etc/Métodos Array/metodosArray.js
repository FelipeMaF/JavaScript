let lista = ['ovo', 'leite', 'farinha', 'fermento']
let lista2 = ['prato', 'panela', 'copo', 'garfo']

/*
//SEPARADOR
alert(lista.toString())//tranforma todo array em string, e separa por virgula
alert(lista.join('-'))//separa o conteudo do array com oque desejar

//BUSCAR CONTEUDO
alert(lista.indexOf('farinha'))//retorna a posição
alert(lista.indexOf('pudim'))//retorna -1 se não achar

//REMOVER CONTEUDO
alert('Lista: '+ lista2 + '   .shift: ' + '   Lista: ' + lista2.shift()+lista2 + '   .pop: ' + lista2.pop() + '   Lista: ' + lista2)

alert(lista2.shift())//Remove o primeiro
alert(lista2.pop())//Remove o ultimo

//ADICIONANDO CONTEUDO
lista.push('Morango')//adiciona conteudo
alert(lista)

//REMOVENDO ITEM
alert(lista)
lista.splice(1, 1)//remove itens, sendo (a partir de qual, quantos itens) no exemplo removi o segundo item '1', apenas 1 item, mas se fosse (1, 2), iria remover 2 itens o 1 e 2, se fosse (0, 3) removeria o item 0,1 e 2, e para remover todos seria apenas (0posição)
alert(lista)

//Concatenar dois Arrays
alert('Lista1: ' + lista + '  Lista2: ' + lista2)
alert(lista.concat(lista2))//Concatenando dois arrays

//ORDENAÇÃO
alert(lista.sort())//ordenando em ordem alfabetica
alert(lista.reverse())//ordenando revertido a partir da ordem alfabetica de cima


let lista3 = [45, 20, 10, 15, 36, 5, 2]


//EDITANDO O CONTEUDO DO ARRAY INTEIRO
alert(lista3)
alert(lista3.map(function(item) {return item * 2}))//o .map passa por todos os itens do array executando a função inserida nele, gerando um novo array.

//FILTRANDO CONTEUDO
alert(lista3.filter(function(item) {
    if(item < 20) {return true}
    else{return false}
}))//Aqui ele está passando um por um, se for < que 20, irá retornar o resoltado, senão não.

alert(lista3.every(function(item) {
    if(item < 20) {return true}
    else{return false}
}))//o Every verifica se TODOS estão de acordo com o definido, ou seja, todos são menores que 20 ?, retorna apenas true ou false neste exemplo.

alert(lista3.some(function(item) {
    if(item < 20) {return true}
    else{return false}
}))//o Some verifica se ALGUM está de acordo, ou seja, algum numero do array é manor que 20 ? se sim, TRUE
*/

let lista4 = [
    {id: 1, nome: 'felipe', sobrenome: 'matheus'},
    {id: 2, nome: 'ana', sobrenome: 'flavia'},
    {id: 3, nome: 'miguel', sobrenome: 'chagas'}
]

//BUSCANDO CONTEUDO EXATO
let pessoa = (lista4.filter(function(item) {
    return (item.sobrenome == 'flavia') ? true : false
    /*acima utilizei um meio mais direto
    if(item.sobrenome == 'flavia'){return true}
    else{return false}*/
}))//irá retornar o objeto encontrado
alert(JSON.stringify(pessoa))