let d;

d = new Date();

console.log(d.getMonth() + 1);

let dat;

dat = Intl.DateTimeFormat('en-US').format(d);

console.log(dat);

const numbers = [12, 45, 33, 29, 39];

const fruits = new Array('apple', 'grape', 'orange');

// console.log(numbers[2]);
// console.log(fruits[2]);

x = `My favorite fruits is a ${fruits[1]}`;

console.log(x);

// ['apple', 'grape', 'orange', 'peach']
fruits.push('peach');

// ['apple', 'grape', 'orange']
fruits.pop();

let y;

y = fruits.includes('grape');

y = numbers.slice(1, 3);

z = fruits.concat(numbers);

newArr = [...numbers, ...fruits];

console.log(fruits[1]);

console.log(y);

console.log(z);

console.log(newArr);

const arr = [1, 2, 3, 4, 5];

arr.reverse();

arr.push(0);

arr.unshift(6);

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];



console.log(arr1.concat(arr2.slice(1, arr2.length)));