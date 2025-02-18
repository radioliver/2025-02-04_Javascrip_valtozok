console.log(5 == "5"); 
console.log(typeof(5)); 
console.log(typeof("5")); 

console.log(5 === "5"); 
console.log(5 === 5); 
console.log(5 !== "5"); 
console.log(5 !== 5); 

let a = "6";
console.log(`a: ${a}, ${typeof(a)}`);
console.log(!(a > 5)); 

console.log("Logikai operátor")
console.log(a > 5 && a < 20); 
console.log("check type")
console.log(a > 5 && typeof(a) === "number"); 
console.log(a === 3 || a === 6); 

let z; 
z=3+4; // összeadás
console.log(z);
z=3-4; // kivonás
console.log(z);
z=2*3; // szorzás
console.log(z); 
z=2/3; // osztás
console.log(z);
z=3%2; // modulo
console.log(z);
z=3**2; // hatványképzés (hatványalap**hatványkitevő
console.log(z);

let x,y; 
x=5;
console.log(`x=${x}`);
console.log(`y=${y}`);
y=++x; // preinkrement 
console.log(`x=${x}, y=${y}`); 
x=5; 
y=x++; // posztinkrement 
console.log(`x=${x}, y=${y}`); 
x=5; 
y=--x; // predekrement 
console.log(`x=${x}, y=${y}`); 
x=5; 
y=x--; // posztdekrement 
console.log(`x=${x}, y=${y}`); 

console.log('Addig jár a korsó a kútra,'+' amíg a lónak fehér a fogam.'); 

let kocka = 'kocka'; 
kocka += 'has'; // x értéke így: 'kockahas'
console.log(kocka)

const gyumolcs = { fa: 'alma', fajta: 'Starking', szin: 'piros' }; 
console.log('fajta' in gyumolcs); // true
console.log(gyumolcs instanceof Object); // false

function myFunction() {
    let valtozo = 5;
    var valtozo2 = 20;
    return "valtozo";
}
console.log(myFunction());
// console.log(valtozo);
console.log(valtozo2);

