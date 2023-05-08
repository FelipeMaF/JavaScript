const num1 = prompt("Digite o primeiro numero: ")
const num2 = prompt("Digite o segundo numero: ")

const x = parseFloat(num1)
const y = parseFloat(num2)

const soma = x + y
let sub, multi, div

if (x > y) {sub = x - y}
    else {sub = y - x}

multi = x * y
div = x / y

alert(
    "Soma: " + soma +
    "\nSubtração: " + sub +
    "\nMultiplicação: " + multi +
    "\nDivisão: " + div
)