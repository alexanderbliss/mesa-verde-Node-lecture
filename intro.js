console.log("hello World");
// let arrayOfPeople = ['me', 'you', 'them',]
let arrayOfPeople = require('./people.js')


console.log(arrayOfPeople);


let code = require('./secret.js')
console.log(code);
console.log(code(10));


let pet = require('./pets.js')
console.log(pet);