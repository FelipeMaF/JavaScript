let lista = ["Lista: "]
let opcao
let posicao = 0

do {
    opcao = prompt("(1) Adicionar novo paciente\n(2) Consultar paciente\n(3) Sair\n" + lista)

    if(opcao == 1){
        let nome = prompt("Adicionar novo paciente.\nNome: ")
        ++posicao
        lista.push(posicao + "º " + nome + " " ) 
    }
    else if(opcao == 2){
        let consulta = prompt("Consultar paciente.\nNome: ")
        let index = lista.indexOf(consulta)
        if(index >= 0) {
            lista.splice(index, 1)
            alert("Paciente atendido: " + consulta)
        } else {
            alert("Paciente não encontrado na lista")
        }
    }
    else{
        alert("Esta opção não existe")
    }

} while(opcao != 3)

alert("Programa encerrado !")