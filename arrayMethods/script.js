
// forEach
const socials = ['Twit', 'LinkedIn', 'Facebook', 'Instagram'];

// socials.forEach(function (item) {
//     console.log(`${item} is the best!`);
// })
// console.log(" ");

// socials.forEach(elem => console.log(elem));



// Array.filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);


// Array.map
const doubledNumbers = numbers.map(number => number * 2);

// console.log(doubledNumbers);





// Array.reduce
const sum = numbers.reduce(function (accumulator, curr) {
    return accumulator + curr;
});

const sum2 = numbers.reduce((total, curr) => total + curr);

// console.log(sum2);


// reduce example
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];


const totalPrice = cart.reduce((total, item) => total + item.price, 0);

const totalPrice2 = cart.reduce(function (accum, prod) {
    return accum + prod.price;
}, 0);

// console.log(totalPrice2);




// challenge
const people = [
    {
        first: 'Harry',
        last: 'Cho',
        email: 'hyunsang123@gmail.com',
        phone: '123-456-7890',
        age: 23,
    },
    {
        first: 'Joo',
        last: 'Y',
        email: 'joshkim123@gmail.com',
        phone: '123-456-1234',
        age: 24,
    },
    {
        first: 'Jin',
        last: 'W',
        email: 'wonton123@gmail.com',
        phone: '123-098-5453',
        age: 28,
    },
    {
        first: 'Sarah',
        last: 'K',
        email: 'sarahk123@gmail.com',
        phone: '123-247-6823',
        age: 25,
    },
];

const youngPeople = people
    .filter(obj => (obj.age <= 25))
    .map(obj => ({
        name: obj.first + ' ' + obj.last,
        email: obj.email,
    }));


console.log(youngPeople);


// challenge2
const nums = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = nums
    .filter(num => num > 0)
    .reduce(function reducer(accum, curr) {
        return accum + curr;
    });

console.log(positiveSum);


// challenge3
const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1, word.length));

console.log(capitalizedWords);


