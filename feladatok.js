let nev = prompt("Adj meg a nevedet:");
console.log(`Hello ${nev}!`);

let oldal1 = prompt("Adj meg egy számot:");
let oldal2 = prompt("Adj meg egy másik számot:");
let terulet = oldal1 * oldal2;
let kerulet = 2 * (oldal1 + oldal2);
console.log(`A téglalap terulete: ${terulet}, kerulete: ${kerulet}`);

let sugar = prompt("Adj meg egy sugarat:");
let kerulett = sugar * 2 * Math.PI;
let terulett = sugar * sugar * Math.PI;
console.log(`A kört terulete: ${terulett}, kerulete: ${kerulett}`);

