const id = 1;

const todo = {
    id,
    title: 'Take out trash',
    user: {
        name: 'Harry',
    },
};

const {id: todoId, user: {name}} = todo;

console.log(todoId, name);

const numbers = [23, 67, 490, 234];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);



















