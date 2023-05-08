//função completa
function sobrenome(sob) {
    return 'Felipe' + sob;
}

//Todos exemplos abaixo possuem o mesmo resultado da função acima.

//Arrow function, para reduzir a função, esta é a menor, mas só pode ser usada assim se for ser feito tudo em 1 linha, 1 param pra cada.
const sobrenome = sob => 'Felipe' + sob;

//Ou assim
const sobrenome = (sob) => 'Felipe' + sob;

//Ou assim
const sobrenome = (sob) => {
    return 'Fraga' + sob;
}


//Ou mais completo assim
const sobrenome = (sob) => {
    let nomeCompleto = 'Felipe' + sob;
    return nomeCompleto;
}

console.log(sobrenome('Fraga'));
