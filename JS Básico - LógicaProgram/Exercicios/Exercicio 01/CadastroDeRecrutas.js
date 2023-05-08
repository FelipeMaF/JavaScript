let primeiroNome = undefined
let segundoNome = undefined
let campoDeEstudo = undefined
let anoNascimento = undefined

primeiroNome = prompt ("Insira seu primeiro Nome:")
segundoNome = prompt ("Insira seu segundo Nome:")
campoDeEstudo = prompt ("Insira seu campo de Estudo:")
anoNascimento = prompt ("Insira seu ano de nascimento:")

alert(  "Recruta Cadastrado com Sucesso !!!\n" +
        "\n\nNome completo: "+primeiroNome +
        "\nSegundo nome: " + segundoNome +
        "\nCampo de estudo: " + campoDeEstudo +
        "\nIdade: " + (2023 - anoNascimento)
)
