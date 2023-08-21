//JSON.PARSE converte Strings em JSON
//EXEMPLOS
let pessoa = '{"nome": "Felipe", "idade": 90}'
//acima temos uma variavel com uma String no formato para JSON

//Aqui convertemos a string em JSON
pessoa = JSON.parse(pessoa)
//agora daria para identificar pessoa.nome por exemplo

//assim também funciona
JSON.parse('{"nome": "Felipe", "idade": 90}')
