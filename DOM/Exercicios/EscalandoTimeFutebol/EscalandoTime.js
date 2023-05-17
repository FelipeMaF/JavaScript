function addJogador() {
    const tabela = document.getElementsByTagName('tr')

    const numeroCamisa = document.createElement('td')
        numeroCamisa.innerText = "05"
    const jogador = document.createElement('td')
        jogador.innerText = "jogador"
    const posição = document.createElement('td')
        posição.innerText = "atacante"

    tabela.appendChild(numeroCamisa, jogador, posição)
}