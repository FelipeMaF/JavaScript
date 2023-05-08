const nome = prompt("Olá turista ! Qual é o seu nome ?: ")

let escolha = prompt("Voce já visitou alguma cidade ?\n (1) SIM\n (2) Não")

let cidades = ""

let qtdCidade = 0

while (escolha == 1) {
    cidades += (prompt("Qual cidade ?") + "\n")
    qtdCidade ++
    escolha = prompt("Visitou mais ulguma cidade ? \n (1) SIM\n (2) Não")
}

alert(nome + "\n" + "Visitou um total de: " + qtdCidade + " cidades \nSendo elas: " + "\n" + cidades)