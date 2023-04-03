let baralho = []
let opcao = ''

do{
    opcao = prompt("Cartas na Mão"+ baralho +"\n(1) Adicionar carta - (2) Puxar uma carta - (3) Sair")

    switch (opcao) {
        case '1':
            const addCarta = prompt("Adicionar carta: ")
            baralho.unshift("\n"+addCarta)
            break

        case '2':
            removeCarta = baralho.shift()
            if(!removeCarta)
            {alert("Não á cartas na mão!")}

                else{alert("Puxou a carta: " + removeCarta)}
            break


        case '3':
            alert("Saindo...")

        default:
            alert("Opção inválida")
    }

}
while(opcao !== '3')

alert("Programa Encerrado")