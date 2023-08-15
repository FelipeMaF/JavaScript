let pessoa = {
    nome: 'Felipe',
    sobrenome: 'Matheus',
    idade: 28,
    social:{
        facebook:'FelipeMFraga',
        instagram:'FelipeFraga'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

let {nome, sobrenome, idade} = pessoa

console.log(nome, sobrenome, idade)