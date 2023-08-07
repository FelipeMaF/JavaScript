function trocar(animal, nomeAnimal) {
    document.querySelector('#imagem').setAttribute('src', animal)
    document.querySelector('#imagem').setAttribute('data-animal', nomeAnimal)
}

function qualAnimal() {
    let animal = document.querySelector('#imagem').getAttribute('data-animal')
    alert('O animal é o: ' + animal)
}