/* conteudo do exercicio
Cadastro de imoveis
*mostrar no menu principal a quantidade de imoveis cadastrados
*opção de salvar imovel
informações ao salvar imovel: nome do proprietario, quantidade de quartos, quantidade de banheiros, se possui garagem.
*opção de mostrar todos imoveis salvos */

let opcao = 0
const imoveis = []
let imovel = {}

do{
    opcao = prompt(imoveis + "\nCadastro de Imoveis\n1- Cadastrar Imovel\n2- Mostrar todos imoveis\n3- Sair")
    switch(opcao) {
        case '1':
            imovel.proprietario = prompt("Nome do proprietario: ")
            imovel.quartos = prompt("Quantos quartos possui: ")
            imovel.banheiros = prompt("Quantos banheiros possui: ")
            imovel.garagem = prompt("Possui garagem: ")

            imoveis.push = (imovel.proprietario + imovel.quartos + imovel.banheiros + imovel.garagem)
            alert(imoveis [0])
            break
        
        case '2':
            alert("Ver imovel")
            break

        case '3':
            alert("Saindo")
            break
    }
    
}
while(opcao != 3)