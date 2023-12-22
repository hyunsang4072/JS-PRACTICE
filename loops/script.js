let temp;

// for loop
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     temp = i;
// }

// console.log(temp);


// while loop
// let i = 0;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }



// do while loop
// let i = 0;

// do {
//     console.log(i + i);
//     i++;
// } while (i <= 7);



// fizzbuzz
// let i = 1;

// while (i <= 100) {
//     if (i % 15 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
//     i++;
// }




// for of loop
// const items = [1, 2, 3, 4, 5];

// for (const item of items) {
//     console.log(item);
// }



// strings
const str = 'Hello World';

for (const word of str) {
    console.log(word);
}


// loop over maps
const map = new Map();
map.set('name', 'Harry');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}


// for in loop
const colorObj = {
    col1: 'red',
    col2: 'blue',
    col3: 'yellow',
    col4: 'green',
}

for (const color in colorObj) {
    console.log(colorObj[color]);
}






