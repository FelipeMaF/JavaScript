let nome = 'Felipe Matheus Fraga'
let nome2 = '      Usando o'
/*
//Contagem de caracteres
alert(nome.length + '   .lenght') //mostra quantos caracteres contando espaços

//BUSCANDO CONTEUDO
alert(nome.indexOf('Matheus') + '   indexOf - posição do Matheus') //mostra se existe este conteudo no texto, retornando como resultado o numero da posição, neste caso seria o 7, pois o Matheus vem depois da 7º posição, mas ele pesquisa também por apenas uma letra ou numero, se fosse 't' ele traria 9. Se não tiver, retorna -1
alert(nome.indexOf('t') + '   indexOf - Posição do t')
alert(nome.indexOf('z') + '   indexOf - procurando por Z retorna -1 pois não achou')

//RECORTANDO CONTEUDO
alert(nome.slice(0, 6) + '   .slice') //o slice seleciona oque deseja exibir através das posições
alert(nome.slice(7, 14)+ '   .slice')
alert(nome.slice(15)+ '   .slice')//ou inicia a partir de uma posição citada
alert(nome.slice(-10)+ '   .slice')//pode pegar de trás pra frente com numero negativo
//alert(nome.substring(0, 5)) faz a mesma coisa do slice, só que tem menos recursos.
alert(nome.substr(0, 5)+ '   .slice')// o substr vc escolhe de onde vai começar a pegar, e quantos caractes vai mostrar.
*/

//SUBSTITUINDO CONTEUDO
alert(nome.replace('Fraga', 'Praga') + '   .replace')//O replace Substitui (X por Y), apenas substitui

alert(nome.toUpperCase() + '   .topperCase')//tudo maiusculo
alert(nome.toLowerCase() + '   .toLowerCase')//tudo minusculo
alert(nome.concat(' o', ' Cara') + '   .concat')//concatenar
alert(nome2.trim() + '   .trim')//remove os espaços do começo
alert(nome.charAt('7') + '   .charAt(7)')//ve oq tem nessa posição, no caso 'M'
alert(nome[7] + '   variavel[7]')//faz a mesma coisa do charAt
alert(nome.split(' ') + ' <- isso é um Array')//Cria um array separando através do atributo citado, no exemplo foi espaço, mas poderia ser ; , . entre outros.