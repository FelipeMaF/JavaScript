let num = prompt("Digite o número para ver sua Tabuada: ")
let vezes = 20
let resultado = ""
for (let i= 0; i <= vezes; i++ ) {
    resultado += i+"x"+num+" = " + (i * num) + "\n"
}
alert("TABUADA DO: " + num + "\n" + resultado)