const resultado = prompt("Escolha uma alternativa:\na)\nb)\nc)")

switch (resultado) {
    case "a":
        alert ("O resultado é 'A'")
        break
    case "b":
        alert ("O resultado é 'B'")
        break
    case "c":
        alert ("O resultado é 'C'")
        break
    default:
        alert("Finalizando...")
}

const resultadoN = prompt("Escolha uma alternativa:\n1)\n2)\n3)")

const resultadoNum = parseFloat(resultadoN)

switch (resultadoNum) {
    case 1:
        alert ("O resultado é 'A'")
        break
    case 2:
        alert ("O resultado é 'B'")
        break
    case 3:
        alert ("O resultado é 'C'")
        break
    default:
        alert("Finalizando...")
}