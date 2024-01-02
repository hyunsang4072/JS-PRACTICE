const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');


const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
            } else {
                jokeEl.innerHTML = 'Something went wrong :(';
            }
        }
    };

    xhr.send();
}

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Async task complete');
        resolve({ name: 'Harry', age: 30 });
    }, 1000);
});

promise.then((user) => {
    console.log(user);
})


// console.log(document.location);

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false;

//             if (!error) {   // if no error
//                 posts.push(post);
//                 resolve();
//             } else {    // if error
//                 // message gets sent to the callback function inside catch call
//                 reject('Something went wrong here!');
//             }
//         }, 2000);
//     });
// }

// function getPosts() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//             document.querySelector('#posts').appendChild(div);
//         });
//     }, 1000);
// }

// function showError(error) {
//     const h3 = document.createElement('h3');
//     h3.innerHTML = `<strong>${error}</strong>`;
//     document.getElementById('posts').appendChild(h3);
// }

// createPost({ title: 'Post Three', body: 'This is post' })
//     .then(getPosts)
//     .catch(showError);


// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open('GET', endpoint);

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText));
//                 } else {
//                     reject('Something went wrong here!');
//                 }
//             }
//         };

//         setTimeout(() => {
//             xhr.send();
//         }, Math.floor(Math.random() * 3000) + 1000);
//     });
// }


