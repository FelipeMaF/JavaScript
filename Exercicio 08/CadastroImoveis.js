const imoveis = []
let opcao = ""

do {
        opcao = prompt("Cadastro de Imoveis" +
        "\nQuantidade de imoveis cadastrados: "+ imoveis.length +
        "\n(1) Cadastrar novo imovel" +
        "\n(2) Listar imoveis" +
        "\n(3) Fechar programa")

    switch(opcao) {
        case "1":
            let imovel = {}

            imovel.prop = prompt("Digite o nome do proprietario: ")
            imovel.quartos = prompt("Quantos quartos possui: ")
            imovel.banheiros = prompt("Quantos banheiros possui: ")
            imovel.garagem = prompt("Possui garagem, SIM/NÃO: ")


            const confirma = confirm(
                "\nProprietario: " + imovel.prop +
                "\nQuantidade de quartos: " + imovel.quartos +
                "\nQuantidade de banheiros: " + imovel.banheiros +
                "\nPossui garagem: " + imovel.garagem
              )
        
              if (confirma) {
                imoveis.push(imovel)
              }

        break

        case "2":
            for(let i = 0; i < imoveis.length; i++)

            alert(
                "Imovel " + (i + 1) +
                "\nProprietario: " + imoveis[i].prop +
                "\nQuantidade de quartos: " + imoveis[i].quartos +
                "\nQuantidade de banheiros: " + imoveis[i].banheiros +
                "\nPossui garagem: " + imoveis[i].garagem
                )
        break

        case "3":
            alert("Encerrando...")
        break

        default: ("Opção inválida")
        break
    }
}
while (opcao !== "3");