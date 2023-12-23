console.log(document.body);

function changeColor(newColor) {
    const elem = document.getElementById('color');
    elem.style.color = newColor;
}

document.querySelector('h3').innerText = 'exciting!!!';

const items = document.querySelectorAll('ul');

console.log(items[1].innerHTML);


// Traversing the DOM
const parent = document.querySelector('.parent');
console.log(parent.children[1]);

console.log(parent.childNodes);

const child = parent.firstChild.nextSibling;
console.log(child.innerText);

const child2 = document.querySelector('.child');

console.log(child2);



const p = document.createElement('p');
p.innerText = 'Random Attack';

const currentDiv = document.getElementById("c1");
document.body.insertBefore(p, currentDiv);

// add to ul
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.parent').appendChild(li);
}

createNewItem('Child 4');

const rand = document.createElement('button');
rand.className = 'remove-item';

console.log(rand);


// create a custom insertAfter()
function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
};


const div = document.createElement('div');
div.className = 'child';
div.textContent = 'Child 2.5';

const secondItem = document.querySelector('.child2');

insertAfter(div, secondItem);

console.log(document.getElementById('c1'));


// Editing CSS
const text = document.querySelector('.card');
const itemList = document.querySelector('.item-list');
const items2 = document.querySelector('li');

function run() {
    // console.log(1482917);
    text.classList.toggle('hidden');
}

document.querySelector('#butt').onclick = run;



