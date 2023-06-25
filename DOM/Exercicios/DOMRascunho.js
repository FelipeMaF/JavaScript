//Resumo de como usar o DOM

//Nos exemplo já irei colocalos dentro de uma função e chamar nos botões do html


//Aqui iremos adicionar itens á umas lista de mercado:
function listaMercado(){
    //1º Precisa selecionar no que irá mexer com getElementById("ID DO TREM")
    const ul = document.getElementById("listaMercado")
    //acima nós selecionamos o UL pois iremos criar um elemento dentro dele, o "li".

    //2º Aqui nós já criamos uma linha de conteudo para a lista UL, primeiro criamos o elemento e depois adicionar conteudo á ele.
    let li = document.createElement("li")

    //3º Aqui nós temos de "pegar" o conteudo que foi escrito no input, e para isso primeiro precisamos selecionar de onde vem, como na 1º etapa e também já iremos informar que queremos seu conteudo usando o .value
    const input = document.getElementById("lista").value
    

    //4º Já temos o conteudo, agora precisamos armazenar ele dentro da li que foi criada
    li.append(input)
    //5º Agora armazenas a li dentro da ul
    ul.prepend(li) //Aqui pode usar APPEND para adicionar ao final da lista ou PREPEND para o inicio da lista.

    //BONUS como já temos o input que no caso é o "lista" que já foi selecionado, nós podemos citar ele abaixo e zerar seu conteudo, para que o campo fique vazio após adicionar algo.
    lista.value = ""

}

function remover() {
    //Removendo conteudo da lista

    //1º Selecionar oque queremos remover, no caso será um conteudo da tag UL, ou seja, um "li", como os li não possuem id, iremos selecionar o primeiro:
    const li = document.querySelector("ul > li")
    //2º usar o .remove para remover.
    li.remove()
}