//Ele converte o formato JSON em Strinh
JSON.stringify({nome: 'Felipe', idade: 28})
'{"nome":"Felipe","idade":28}' // <-Resultado

//assim seria possivel converter e passar para o .parse
JSON.parse('{"nome":"Felipe","idade":28}')


//Ou então
let pessoa = {nome: 'Felipe', idade: 28}
let pessoaString = JSON.stringify(pessoa)

/*
pessoaString
{"nome":"Felipe","idade":28}
*/

