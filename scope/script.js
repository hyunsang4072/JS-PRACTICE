// alert('Hello');

// block scope
if (true) {
    console.log('This is block scope');
}

// nested scope
function outer() {
    let x = 100;

    function inner() {
        let y = -100;

        console.log(x + y);
    }

    inner();
}

outer();