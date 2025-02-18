let nev = prompt("Add meg a neved: ")
console.log(`Hello ${nev}`)

let oldal1 = prompt("Add meg az első oldalt: ")
let oldal2 = prompt("Add meg a második oldalt: ")
let kerulet = 2 *(oldal1+oldal2)
let terulet = oldal1 * oldal2
console.log(`Téglalap kerülete: ${kerulet}\nTéglalap területe: ${terulet}`)

let sugar = prompt("Add meg a kör sugarát: ")
let keruletkor = 2 * sugar * Math.PI
let teruletkor = sugar*sugar * Math.PI
console.log(`Kör kerülete: ${keruletkor}\nKör területe: ${teruletkor}`)