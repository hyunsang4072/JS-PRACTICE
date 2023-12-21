// function declaration
let heart = '<3';

function decl(heart) {
    console.log('this is function declaration!');
    console.log(heart);
}

decl(heart);

// function expression
let sad = ';(';

function expr(sad) {
    console.log('this is function declaration!');
    console.log(sad);
}

expr(sad);

const subtract = (num1, num2) => num1 - num2;

console.log(subtract(100, 50));



// arrow function returns obj
const createObj = () => ({
    name: 'Harry',
    age: 23,
});

console.log(createObj().name, createObj().age);

const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (n) {
    console.log(n);
});

const getCelsius = (temp) => (temp - 32) * (5 / 9);

console.log(getCelsius(32));

// Immediately Invoked Function Expressions (IIFE)
(function () {
    const user = 'Harry';
    console.log(user);
    console.log('this is coming from IIFE!');
})();

(function (name) {
    console.log('Hello, my name is ' + name + '.');
})('Harry Cho');







