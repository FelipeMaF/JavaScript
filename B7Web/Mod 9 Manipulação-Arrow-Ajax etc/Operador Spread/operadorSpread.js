//no lugar do Push, é possivel utilizar os ... para acrescentar o conteudo ao array, isso pode ser usado com Array, mas é principalmente usado com objetos

//Spread no array
let array1 = [1, 2, 3, 4, 5]
let array2 = [...array1, 6, 7, 8, 9]
console.log(array2)

//Spread no Objeto
let info = {
    nome:'Felipe',
    sobrenome:'Fraga',
    idade:28
}

let novaInfo = {
    ...info,
    cidade:'Puso Alegre',
    estado:'Minas Gerais',
    pais:'Brasil'
}
console.log(novaInfo)

//Spread com Fnução
function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status:0,
        token:'vvdxvrvrsvs',
        data_cadastro:'....'
    }

    return novasInfo
}

console.log(adicionarInfo({nome:'Felipe', sobrenome:'Fraga'}))