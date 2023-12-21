const d = new Date();
const hour = d.getHours();
const month = d.getMonth() + 1;

console.log(d);

if (hour < 12) {
    console.log('Good Morning!');
} else if (hour < 18) {
    console.log('Good Afternoon!');
} else {
    console.log('Good Night!');
}


console.log(month);

// switch cases
switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 10:
        console.log('It is October');
        break;
    case 12:
        console.log('It is December');
        break;
    default:
        console.log('Unknown');
}


// calculator
const calculator = (num1, num2, math) => {
    let result;

    switch (math) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Error';
    }

    return result;
}


console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '&'));



// ternary operator
const age = 18;

age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');



