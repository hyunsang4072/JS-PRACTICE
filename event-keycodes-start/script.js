const text = document.querySelector('.key');

// // console.log(text.innerHTML);

// const keyPressed = e => {
//     console.log('keypress');
// };

// // function keyPressed(e) {
// //     console.log(e.target);
// // }

// text.addEventListener('click', keyPressed);

function getKeyInput(e) {
    // console.log(e.key);
    // text.innerText = e.key;
    // console.log(text.innerText);
    const insert = document.getElementById('insert');

    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };

    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }
}

window.addEventListener('keypress', getKeyInput);

// const form = document.getElementById('item-form');

// function onSubmit(e) {
//     e.preventDefault();

//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;

//     if (item === '' || priority === '0') {
//         alert('Please fill in all fields');
//         return;
//     }
// }

// form.addEventListener('submit', onSubmit);


const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // console.log(e.target.tagName);
        // console.log(e.target);
        // e.target.remove();
        console.log(`List ${e.target.innerText} was clicked!`);
    }
})

// window.addEventListener(
//     'load',
//     () => (document.querySelector('h1').textContent = 'Hello World')
// );


// window.addEventListener(
//     'DOMContentLoaded',
//     () => (document.querySelector('h1').textContent = 'Hello World')
// );

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});


window.addEventListener('scroll', () => {
    console.log(`Scrolling at ${window.scrollX}, ${window.scrollY}`);
});


window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'blue';
    });
});


window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'pink';
    });
});






