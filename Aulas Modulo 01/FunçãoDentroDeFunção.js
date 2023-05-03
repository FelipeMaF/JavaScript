//Aqui nós realizamos a raiz quadrada de um numero na primeira função, e na próxima função nós realizamos uma soma de dois números que passaram pela função de raiz quadrada.

//Forma 1, funções separadas
function raizQuadrada(x) {
    return x * x
}

function addRaizQuadrada(a, b) {
    let raizA = raizQuadrada(a)
    let raizB = raizQuadrada(b)
    return raizA + raizB
}

console.log(addRaizQuadrada(2, 3))


//Forma 2 colocando a função dentro da função
function addRaizQuadrada(a, b) {
    function raizQuadrada(x) {
        return x * x
    }

    let raizA = raizQuadrada(a)
    let raizB = raizQuadrada(b)
    return raizA + raizB
}

console.log(addRaizQuadrada(2, 3))

//Forma 3: Dica do professor, por opinião pessoal, prefere usar Arrow Function quando é feito uma função dentro da outra, para não repetir duas vezes o 'function'
function addRaizQuadrada(a, b) {
    const raizQuadrada = (x) => x * x       //ele da return automaticamente

    let raizA = raizQuadrada(a)
    let raizB = raizQuadrada(b)
    return raizA + raizB
}

console.log(addRaizQuadrada(2, 3))

