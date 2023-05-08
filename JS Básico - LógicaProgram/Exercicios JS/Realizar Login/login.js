let contas = []

menu()

function menu() {
    let menu = ''

    do{
        let menu = escolhaMenu()
        switch(menu) {
            case '1': login()
            break
            case '2': cadastro()
            break
        }
    }while(menu !== '3')
}

function escolhaMenu() {
    const escolha = prompt(
    `==Acesso ao Sistema==
    (1) Realizar login
    (2) Cadastrar novo usuario`)

    return escolha
}

function cadastro() {
    const login = prompt("Digite seu login: ")
    const senha = prompt("Digite sua Senha: ")

    const confirma = confirm (
        `===Confirma a criação da conta===
        Login: ${login}
        Senha: ${senha}`
    )

    if (confirma) {
        const conta = {login, senha}
        contas.push(conta)
        alert("Cadastro realizado com sucesso !")
    }
}

function login() {
    const login = prompt("Digite o Login: ")
    const senha = prompt("Digite a senha: ")

    for(i = 0; i !== contas.length; i++) {
        
        if(contas[i].login === login) {
            if(contas[i].login === login && contas[i].senha === senha){
                alert("Login realizado.")}
        
        else if(contas[i].login === login && contas[i].senha !== senha){
            alert("Senha incorreta")}

            else {alert("Usuario invalido")}
        }
        
        }
    }