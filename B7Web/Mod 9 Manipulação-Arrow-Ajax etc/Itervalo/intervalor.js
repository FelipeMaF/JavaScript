let timer
let timer2

function comecar() {
    timer = setInterval(showTime, 200)
}
function parar() {
    clearInterval(timer)
}

function showTime() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let txt = h+':'+m+':'+s

    document.querySelector('.relogio').innerHTML = txt
}

function rodar() {
    timer2 = setTimeout(function() {
        document.querySelector('.demo').innerHTML = 'Roudou!!'
    }, 3000)
}

function cancelrodar() {
    clearInterval(timer2)
}