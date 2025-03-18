let szam = prompt("Adj meg egy számot:");
if (szam > -30 && szam < 40) {
    console.log("Igen, közötte van");
}
else console.log("Nem, nincs közötte");

//2. feladat: 

let szam2 = prompt("Adj meg egy számot:");
let szam3 = prompt("Adj meg egy számot:");
if (szam2 > szam3) {
    console.log(`A nagyobb szám: ${szam2}`);
}
else if (szam2 < szam3) {
    console.log(`A nagyobb szám: ${szam3}`);
    
}
else console.log("A két szám egyenlő");

//3. feladat:

let x = prompt("Adj meg egy számot (+/-):");
if (x > 0) {
    console.log("Pozitív");
}
else if (x < 0) {
    console.log("Negatív");
}
else console.log("0");

//4. feladat: 

let szam4 = prompt("Adj meg egy számot:");
if (szam4 % 1 == 0) {
    console.log("A szám egész");
}


//5. feladat:

let egyik = prompt("Adj meg egy számot:");
let másik = prompt("Adj meg egy számot:");
if (egyik > másik) {
    console.log(`${egyik} > ${másik}`);
}
else if (egyik < másik) {
    console.log(`${egyik} < ${másik}`);
    
}
else console.log(`${egyik} = ${másik}`);

//6. feladat:

let eletkor = prompt("Adj meg egy számot:");
if (eletkor >= 0 && eletkor <= 6) {
    console.log("Az illető gyerek");
}
else if (eletkor >= 7 && eletkor <= 18) {
    console.log("Az illető iskolás");
}
else if (eletkor >= 19 && eletkor <= 60) {
    console.log("Az illető dolgozó");
}
else console.log("Az illető nyugdíjas");