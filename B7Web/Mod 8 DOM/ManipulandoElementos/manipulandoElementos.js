function addAcima() {
    const ul = document.querySelector('ul')

    let newLi = document.createElement('li')
    newLi.innerText = "Adicionado em Cima"

    ul.prepend(newLi)
}

function addAbaixo() {
    const ul = document.querySelector('ul')

    let newLi = document.createElement('li')
    newLi.innerText = "Adicionado abaixo"

    ul.append(newLi)
}

function addAntes() {
    const ul = document.querySelector('ul')

    let newBtn = document.createElement('button')
    newBtn.innerText = 'Botãonovo'
    
    ul.before(newBtn)
}

function addDepois() {
    const ul = document.querySelector('ul')

    let newBtn = document.createElement('button')
    newBtn.innerText = 'Botãonovo'
    
    ul.after(newBtn)
}

function mostrarSenha() {
    const input = document.querySelector("#input")
    const btn = document.querySelector('#btnSenha')

    if(input.type === "password") {
        input.setAttribute('type', 'text')
        btn.innerText = "Ocultar senha"
    }
        else{input.setAttribute('type', 'password')
        btn.innerText = "Mostrar senha"}
}

function btnEnviar() {
    const input = document.querySelector("#input").value
    const ul = document.querySelector("#ul")
    let newli = document.createElement('li')
    newli.append(input)
    this.input.value = ''

    ul.append(newli)
}