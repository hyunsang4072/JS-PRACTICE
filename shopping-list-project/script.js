const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input from User
    if (newItem == '') {
        alert('Please add an item!');
        return;
    }

    // Create List Item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    // Clears input
    itemInput.value = '';
}

function createButton(className) {
    const newButton = document.createElement('button');
    newButton.className = className;

    const icon = createIcon('fa-solid fa-xmark');
    newButton.appendChild(icon);

    return newButton;
}

function createIcon(className) {
    const newIcon = document.createElement('i');
    newIcon.className = className;
    return newIcon;
}


itemForm.addEventListener('submit', addItem);









