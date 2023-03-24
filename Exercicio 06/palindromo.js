let palavra = prompt("Digite a palavra: ")
let nome = ""
for(let i = palavra.length - 1; i >= 0 ; i-- ) {
    nome += (palavra[i])
}
if(palavra === nome){
    alert("A palavra " + palavra + " invertida ficaria " + nome + "\nSendo um Palindromo !")
}
    else{
        alert("A palavra " + palavra + " invertida ficaria " + nome + "\n Não é um Palindromo !")
    }

