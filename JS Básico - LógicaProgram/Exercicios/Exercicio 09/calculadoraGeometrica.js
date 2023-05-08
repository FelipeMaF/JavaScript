//RESOLUÇÃO ONEBIT (O MEU ESTÁ ABAIXO)

function calcularAreaTriangulo() {
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return base * altura / 2
  }

  function calcularAreaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * altura
  }

  function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Informe a área do quadrado:"))
    return lado * lado
  }

  function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
  }

  function calcularAreaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14 * raio * raio)
  }

  function exibirMenu() {
    return prompt(
      "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
    )
  }

  function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
      let resultado
  
      switch (opcao) {
        case "1":
          resultado = calcularAreaTriangulo()
          break
        case "2":
          resultado = calcularAreaRetangulo()
          break
        case "3":
          resultado = calcularAreaQuadrado()
          break
        case "4":
          resultado = calcularAreaTrapezio()
          break
        case "5":
          resultado = calcularAreaCirculo()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
      if (resultado) {
        alert("Resultado: " + resultado)
      }
  
    } while (opcao !== "6");
  }

  executar()




/* O MODO COMO FIZ, PORÉM NÃO HAVIA COLOCADO TUDO EM FUNCTION, POR ISSO UTILIZEI O DA RESOLUÇÃO PARA FICAR DE EXEMPLO
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
                altura = prompt("Digite o tamanho do lado: ")
                alert("Área do quadrado: " + quadrado())
                break

            case "4":
                baseMaior = prompt("Digite o tamanho da Base Maior: ")
                baseMenor = prompt("Digite o tamanho da Base Menor: ")
                altura = prompt("Digite o tamanho da altura: ")
                alert("Área do trapézio: " + trapezio())
                break

            case "5":
                diametro = prompt("Digite o tamanho do Diametro: ")
                alert("Área do circulo: " + circulo())
                break

            case "6":
                alert("Encerrando programa!")
                break

            default:
                alert("Escolha inválida")
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
*/
