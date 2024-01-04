function tempting1() {
    const elem = document.querySelector('.hidden1');
    if (elem.style.display === 'none') {
        elem.style.display = 'block';
    } else {
        elem.style.display = 'none';
    }
}

function tempting2() {
    const elem = document.querySelector('.hidden2');
    if (elem.style.display === 'none') {
        elem.style.display = 'block';
    } else {
        elem.style.display = 'none';
    }
}

const lst = document.querySelector('li');

const items = document.querySelector('ul');
const items2 = document.querySelectorAll('li');

function onClear() {
    items2.forEach((item) => {
        let num = item.innerText.charAt(item.innerText.length - 1);
        num = +num + 1;
        item.innerText = 'number ' + num;
        // console.log(num);
    });
    // lst.innerHTML = 'number 4';
    // items.innerHTML = '';
}

lst.addEventListener('click', onClear);

const butt = document.querySelector('h1');

const onDoubleClick = () => console.log('you clicked me twice!!');

butt.addEventListener('mousedown', onDoubleClick);

const lst2 = document.querySelector('li');

function onClick2(e) {
    console.log(e.target);
    console.log(e.currentTarget);
}

lst2.addEventListener('dblclick', onClick2);

let intervalId;

function startChange() {
    if (!intervalId) {
        intervalId = setInterval(changeRandomColor, 500);
    }
}

function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
    clearInterval(intervalId);
}

document.querySelector('.changeStart').addEventListener('click', startChange);
document.querySelector('.changeStop').addEventListener('click', stopChange);




const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
}

function getPosts() {
    setTimeout(() => {
        posts.forEach(function (post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);





// destructuring in JS
// const obj = {
//     id: 1,
//     title: 'Hello World',
//     body: 'My name is Harry',
//     age: 23,
//     city: 'Berkeley',
//     state: 'CA',
// };

// function sim({ id, title, body, age, city, state }) {
//     console.log(`${title}, ${body}. I'm ${age} years old, and I live in ${city}, ${state}.`);
// }

// sim(obj);

