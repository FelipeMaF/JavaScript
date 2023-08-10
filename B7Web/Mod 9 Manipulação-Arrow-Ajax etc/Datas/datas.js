let d = new Date()
let da = new Date('01/01/0101 17:26')

console.log(d)
console.log(d.toDateString())
console.log(d.toUTCString())
console.log(da)
d.setFullYear(2022)//edita o ano
console.log(d)
d.setMonth(10)//edita o mes
console.log(d)
d.setDate(15)//edita o dia
console.log(d)

//PRAZO
d.setDate(d.getDate() + 5)//pega a data de hoje e adiciona a quantidade de dias
console.log(d)
d.setHours(d.getHours() + 5)//Pega a hora atual e adiciona a quantidade de horas
console.log(d)