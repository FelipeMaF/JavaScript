/*Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.*/

let contador = 0


function addTec() {
    let addtli = document.getElementById("ul")
    let novoItem = document.createElement("li")
    novoItem.innerText = document.getElementById("tecnologia").value
    novoItem.id = 'tec' + contador
    
    let label1 = document.createElement("label")
    label1.htmlFor = 'radio1' + contador
    label1.textContent = '0 a 2 anos'

    let radio1 = document.createElement("input")
    radio1.type = 'radio'
    radio1.id = 'radio1' + contador
    radio1.name = 'radio' + contador

    let label2 = document.createElement("label")
    label2.htmlFor = 'radio2' + contador
    label2.textContent = '3 a 4 anos'

    let radio2 = document.createElement("input")
    radio2.type = 'radio'
    radio2.id = 'radio2' + contador
    radio2.name = 'radio' + contador

    let label3 = document.createElement("label")
    label3.htmlFor = 'radio3' + contador
    label3.textContent = '3 a 4 anos'

    let radio3 = document.createElement("input")
    radio3.type = 'radio'
    radio3.id = 'radio3' + contador
    radio3.name = 'radio' + contador

    let btnremove = document.createElement("button")
    btnremove.textContent = 'Remover'
    btnremove.type = 'button'
    btnremove.id = 'botão' + contador
    btnremove.addEventListener('click', function() {
        addtli.removeChild(novoItem)
    })
    
    if(novoItem.textContent === "") {alert('Campo tecnologia vazio')}
    else{novoItem.append(radio1,label1,radio2,label2,radio3,label3,btnremove)
        addtli.appendChild(novoItem)
        tecnologia.value = ""
        contador++}
}

const botaoaddtec = document.getElementById("adicionarTec")
         botaoaddtec.addEventListener("click", addTec)