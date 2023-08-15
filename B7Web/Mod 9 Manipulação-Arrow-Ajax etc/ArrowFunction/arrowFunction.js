function somar(x, y) {
    return x + y;
}

let somar2 = function(x, y) {
    return x + y;
}

let somar3 = (x, y) => {
    return x + y;
}

let somar4 = (x, y) => x + y;

console.log(somar(5, 10))
console.log(somar2(5, 10))
console.log(somar3(5, 10))
console.log(somar4(5, 10))


let letrasNoNome = nome => nome.length;
console.log( letrasNoNome('Felipera'))