const veic1 = prompt("Digite o nome do Veiculo 1: ")
const veic2 = prompt("Digite o nome do Veiculo 2: ")

let veic1Vel = prompt("Digite a velocidade que o " + veic1 + " está: ")
let veic2Vel = prompt("Digite a velocidade que o " + veic2 + " está: ")

let x = parseFloat (veic1Vel)
let y = parseFloat (veic2Vel)

if (x > y) {
    alert("O " + veic1 + " é o mais rápido !!") }

else if (y > x) {
    alert("O " + veic2 + " é o mais rápido !!")}

else {alert("Tanto o " + veic1 + " quanto o " + veic2 + " estão na mesma velocidade !") }