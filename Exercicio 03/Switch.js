const metros = prompt("Insira a quantidade em Metros que deseja converter: ")
let resultado = undefined
const unidadeMedida = prompt("Para qual unidade de Medida deseja converter ?" +
"\n(mm) Milímetro" +
"\n(cm) Centímetro" +
"\n(dm) Decímetro" +
"\n(dm) Decâmetro" +
"\n(hm) Hectômetro" +
"\n(km) Quilômetro")

switch(unidadeMedida) {

    case "mm":
        resultado = metros * 1000
        alert(metros + " Metros é igual á: " + resultado + " Milímetros")
        break

    case "cm":
        resultado = metros * 100
        alert(metros + " Metros é igual á: " + resultado + " Centímetro")
        break

    case "dm":
        resultado = metros * 10
        alert(metros + " Metros é igual á: " + resultado + " Decímetro")
        break

    case "dam":
        resultado = metros / 10
        alert(metros + " Metros é igual á: " + resultado + " Decâmetro") 
        break 
        
    case "hm":
        resultado = metros / 100
        alert(metros + " Metros é igual á: " + resultado + " Hectômetro")
        break

    case "km":
        resultado = metros / 1000
        alert(metros + " Metros é igual á: " + resultado + " Quilômetro")
        break

    default: alerQt("Opção inválida!")
}

