for (let i = 1; i <= 5; i++) {
    console.log(i);
}


let person = {name:"Pista", age:40, email:"pista@email.com"};
for(key in person) {
    console.log(`${key} = ${person[key]}`);
} 

let i = 1;
while (i <= 5) {
    console.log(i);
    i++
}

let i2 = 1;
do {
    console.log(i);
    i2++;
} while (i <= 5);
