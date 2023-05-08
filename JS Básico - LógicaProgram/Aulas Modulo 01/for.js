// inicialização ; condição ; finalização
/* Forma comum de usar
for (let indice = 0 ; indice <= 10; indice++){
    alert("Indice = " + indice)
}
*/

/* Ele executar o primeiro alert só uma vez, variavel do lado de fora.

let indice = 0
for (
    alert("Inicializando o For");
    indice <= 10;
    alert("Finalizando um bloco de repetição")
) {
    alert("Indice = " + indice)
    indice++
}
*/

let nome = "Felipe"

for (let indice = 0; indice < nome.length; indice++) {
    alert(nome[indice])
}