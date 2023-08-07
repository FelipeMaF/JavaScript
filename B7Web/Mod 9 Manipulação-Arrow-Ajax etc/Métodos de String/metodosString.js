let nome = 'Felipe Matheus Fraga'
alert(nome.length + '   .lenght') //mostra quantos caracteres contando espaços

alert(nome.indexOf('Matheus') + '   indexOf - posição do Matheus') //mostra se existe este conteudo no texto, retornando como resultado o numero da posição, neste caso seria o 7, pois o Matheus vem depois da 7º posição, mas ele pesquisa também por apenas uma letra ou numero, se fosse 't' ele traria 9. Se não tiver, retorna -1

alert(nome.indexOf('t') + '   indexOf - Posição do t')

alert(nome.indexOf('z') + '   indexOf - procurando por Z retorna -1 pois não achou')