let x;

const person = {
    name: 'Harry Cho',
    age: 24,
    isAdmin: true,
    address: {
        street: '2430 Dwight Way',
        city: 'Berkeley',
        state: 'CA',
    },
    hobbies: ['sports', 'video game', 'listening to music'],
    school: 'UC Berkeley',
};

x = person.name;

delete person.address.state

console.log(person.address.state);

person.greet = function () {
    console.log(`Hello, I live in ${this.address.city}`);
};

person.greet();

console.log(`Hi, my name is ${person.name}. I'm ${person.age} years old who is interested in ${person.hobbies}. I live in ${person.address.street}. I go to ${person.school}. Nice to meet you!`);


const todo = new Object();

todo.id = 1;
todo.name = 'Buy food';
todo.completed = false;

console.log(todo);


//

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Take out trash' },
    { id: 3, name: 'Do homework' },
]

let z;

z = todos[0].name;

console.log(z);

console.log(Object.entries(todos));










