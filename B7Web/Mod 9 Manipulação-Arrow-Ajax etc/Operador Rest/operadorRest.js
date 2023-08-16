//Sem operador Rest teria de ser:
function adicionar1(n1,n2,n3,n4,n5,n6,n7,n8,n9){
    console.log(n1,n2,n3,n4,n5,n6,n7,n8,n9)
}
adicionar1(1,2,3,4,5,6,8,9)

//Com operador Rest ele cria um Array
function adicionar2(...numeros){
    console.log(numeros)
}
adicionar2(1,2,3,4,5,6,8,9)

//Com strings
function adicionar(nomes, ...novosNomes){
    let nomesnomes = [
        ...nomes,
        ...novosNomes
    ]
    console.log(nomesnomes)
}

let nomes = ['Felipe', 'Matheus']
let outros = adicionar(nomes, 'Fraga', 'Topzera')