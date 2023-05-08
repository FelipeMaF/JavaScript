let saldo = prompt("Qual será seu Saldo Inicial ?")
let escolha = " "
saldo = parseFloat(saldo)
do{
    escolha = prompt("Seu saldo é de R$ " + saldo + "\nEscolha uma opção\n(1) Depositar\n(2) Sacar\n(3) Sair")

    switch (escolha){
        case "1":
            saldo += parseFloat( prompt("Digite a quantidade a ser depositada") )
            break
        case "2":
            saldo -= prompt("Digite a quantidade a ser sacada")
            break
    }
}while(escolha !== "3")
alert("Programa Encerrado!")
