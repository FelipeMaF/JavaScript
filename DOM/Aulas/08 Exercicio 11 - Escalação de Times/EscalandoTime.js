function addJogador() {

    const tabela = document.getElementById('campoTabela')

        const tr = document.createElement('tr')

            const numeroCamisa = document.createElement('td')
                numeroCamisa.innerText = inpcamisa.value
            const jogador = document.createElement('td')
                jogador.innerText = inpjogador.value
            const posição = document.createElement('td')
                posição.innerText = inpposição.value

    
    const confirma = confirm(
        `Confirmar escalação:
        Camisa: ${inpcamisa.value}
        Jogador: ${inpjogador.value} 
        Posição: ${inpposição.value}
    `)

    if(confirma){
        tr.append(numeroCamisa, jogador, posição)
        tabela.append(tr)
        inpcamisa.value = ""
        inpjogador.value = ""
        inpposição.value = ""
    }
    
}

function removeJogador() {
    //const removeTr = document.querySelector("table > tr > td")
    //let posicaocamisa = 0
        
    if(removeTr = inpremovecamisa.value){
        let removeTr = document.querySelectorAll("table > tr > td")[posicaocamisa].value
        removeTr.remove()}
    
    /*    
    removeTr = document.querySelectorAll("table > tr > td")[posicaocamisa]
    removeTr.remove()

    removeTr = document.querySelectorAll("table > tr > td")[posicaocamisa]
    removeTr.remove()
    */
}




/*
function removeJogador() {
    const removeTr = document.querySelector("table > tr")
    
    removeTr.remove("td")

}
*/

/*# 8 - Exercício 11

### Escalação do Time

Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.*/