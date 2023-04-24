/*## Sistema de Vagas de Emprego
Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções. */
let vaga = []

do{menu()} 
while(opcao !== "6")


function menu() {
    let opcao = prompt(
    "=====Menu de Vagas===== " +
    "\n(1) Listar vagas disponiveis" +
    "\n(2) Criar uma nova vaga" +
    "\n(3) Visualizar uma vaga" +
    "\n(4) Inscrever um candidato em uma vaga" +
    "\n(5) Excluir uma vaga" +
    "\n(6) Sair")

    switch (opcao) {
        case "1": visualizarVagas()
        case "2": criarNovaVaga()
    }
}

function visualizarVagas() {
    vaga.forEach(novaVaga)
}

function criarNovaVaga() {
    let novaVaga = {}
    novaVaga.titulo = prompt("Digite o titulo da Vaga")
    novaVaga.descricao = prompt("Digite a descrição da vaga")
    novaVaga.data = prompt("Digite a data de vencimento da Vaga")

    const confirma = confirm(
        "Confirma os dados abaixo ?\n" +
        "Titulo da vaga: " + novaVaga.titulo + "\n" + 
        "Descrição: " + novaVaga.descricao + "\n" + 
        "Data de vencimento: " + novaVaga.data)

    if(confirma) {
        novaVaga.push(vaga)
        return menu()
    }
}
