function sayHello() {
    console.log('Hello World!');
}

sayHello();

function divide(num1, num2) {
    console.log('The result is...')
    return num1 / num2;
}

let x;

x = divide(10, 2);

console.log(x);

function logInUser(user) {
    return `The user ID is ${user.id}. The password is ${user.pwd}.`;
}

user1 = {
    id: 'hyunsang237',
    pwd: 12345678,
};

console.log(user1);

function printArr(...arr) {
    let rand = Math.floor(Math.random() * arr.length);

    return arr[rand];
}

console.log(printArr(1, 2, 3, 4, 5, 6, 7));






