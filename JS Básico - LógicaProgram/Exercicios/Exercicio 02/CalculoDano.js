//Player1
let player1 = prompt("Insira o Nome do primeiro combatente: ")
let player1Poder = prompt("Insira o poder de ataque: ")
//Player2
let player2 = prompt("Insira o Nome do segundo combatente: ")
let player2HP = prompt("Insira quantos pontos de HP possui: ")
let player2HP2 = undefined
let player2PD = prompt("Insira quantos pontos de Poder de Defesa: ")
let escudo = prompt("Possui escudo ? \n Digite 1 para Sim \n Digite 2 para Não")

let dano = undefined

//Comabte sem escudo
if (player1Poder > player2PD && escudo == 2) {
    (player2HP2 = (player1Poder - player2PD) - player2HP)
}

//Comabte com escudo
if (player1Poder > player2PD && escudo == 1) {
    (player2HP2 = ((player1Poder - player2PD) /2 ) - player2HP)
}

//Variavel para detalhes do escudo
let escudoX = undefined
if(escudo == 1) {escudoX = "Sim"}
    else{escudoX = "Não"}

//Dano causado
alert(
    "Player 1: " + player1 +
    "\nPoder de Ataque = " + player1Poder +

    "\n\nPlayer 2:" + player2 +
    "\nHP inicial = " + player2HP +
    "\nHP após combate = " + player2HP2 +
    "\nPoder de Defesa = " + player2PD +
    "\nEstá usando escudo = " + escudoX
)