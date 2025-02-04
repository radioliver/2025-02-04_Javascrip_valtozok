let e = 2;
console.log('e = ' + e + '  típusa: ' + typeof(e));

const pi = 3.14;
console.log('pi = ' + pi + '  típusa: ' + typeof(pi));

console.log(0.1 + 0.2)
console.log((0.1 + 0.2).toFixed(2));
console.log(1/0)
console.log(0/0)

//stringek
firstName = "John";
lastName = "Doe";
//template literal (template string)
// backtick(`)  
console.log(`firstname: ${firstName}, lastname: ${lastName}`);

//object
let person = {
    name: 'Eminem',
    age: 39,
    //boolean

    isStudent: false,
    address: {
        city: 'Detroit',
        state: 'Michigan',
        street: '123 Main St'
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address.state);
console.log(person.address.city);
console.log(person.address.street);

//undefined
let xy;
console.log(xy);

//boolean
console.log("BOOLEAN");
console.log(typeof true);
console.log(Boolean(0));
console.log(Boolean("a"));
console.log(Boolean(""));
console.log(Boolean(1));


