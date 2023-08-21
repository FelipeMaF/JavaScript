//Callback é uma função criada que determina que quando determinada coisa acontecer, ela será executada.
//ela espera determinado resultado para ser executada, sendo assim assincrono

function alertar() {
    alert('Opa')
}

let nome = 'Felipe'
setTimeout(alertar, 20000)
let sobrenome = 'Matheus'
console.log('Nome completo = '+nome+ ' '+ sobrenome)

//o resultado do callback virá depois de todos outros