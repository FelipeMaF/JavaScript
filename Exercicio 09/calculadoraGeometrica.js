/*
### Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/

let opcao = ""
let base = 0
let baseMenor = 0
let baseMaior = 0
let altura = 0
let diametro = 0
let resultado = ""

do{
    opcao = prompt(
        "===Calculadora Geométrica===\n" +
        "(1) Triângulo\n" +
        "(2) Retângulo\n" +
        "(3) Quadrado\n" +
        "(4) Trapézio\n" +
        "(5) Círculo\n" +
        "(6) Sair")

        switch(opcao){
            case "1":
                base = prompt("Digite o tamanho da Base: ")
                altura = prompt("Digite o tamanho da altura: ")
                alert("Área do triângulo: " + triangulo())
                break

            case "2":
                base = prompt("Digite o tamanho da Base: ")
                altura = prompt("Digite o tamanho da altura: ")
                alert("Área do retangulo: " + retangulo())
                break

            case "3":
                altura = prompt("Digite o tamanho da altura: ")
                alert("Área do quadrado: " + quadrado())
                break

            case "4":
                baseMaior = prompt("Digite o tamanho da Base Maior: ")
                baseMenor = prompt("Digite o tamanho da Base Menor: ")
                altura = prompt("Digite o tamanho da altura: ")
                alert("Área do trapézio: " + trapezio())
                break

        }
}while(opcao !== "6");

function triangulo() {
    return (base * altura / 2)
}

function retangulo() {
    return (base * altura)
}

function quadrado() {
    return (altura * altura)
}

function trapezio() {
    return ((baseMaior * baseMenor) * altura / 2)
}

function circulo() {
    return ((3,14 * ((diametro / 2) * (diametro / 2))))
}



/*
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)
*/