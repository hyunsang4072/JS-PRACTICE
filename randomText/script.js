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



