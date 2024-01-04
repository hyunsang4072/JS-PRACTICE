// http://httpstat.us   <- mimic http requests
// fetch('http://httpstat.us/404')
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error('Request Failed');
//         }
//         return res
//     })
//     .then((data) => {
//         console.log(data);
//         console.log('Success');
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// fetch('http://httpstat.us/404')
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error('Request Failed');
//         }
//         return res
//     })
//     .then((data) => {
//         console.log(data);
//         console.log('Success');
//     })
//     .catch((error) => {
//         console.log(error);
//     })


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'Harry', age: 23 });
    }, 1000);
});

async function getPromise() {
    const response = await promise;

    console.log(response);
}

// getPromise();

// normal async/await
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}
// getUsers();

// arrow function async/await
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    console.log(data);
}

// getPosts();


// try {
//     console.log(x);
// } catch (error) {
//     console.log('Error: ' + error);
// }


function double(num) {
    if (isNaN(num)) {
        throw new Error(num + ' is not a number');
    }

    return num * 2;
}

try {
    const y = double('Hello');
} catch (error) {
    console.log(error);
}


const getNames = async () => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch('http://httpstat.us/404');

        if (!response.ok) {
            throw new Error('Request Failed');
        }

        const data = await response.text();

        console.log(data);
    } catch (error) {
        // alert(`${error} Error`);
    }
};

// getNames();


// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', endpoint);

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText));
//                 } else {
//                     reject('Error: Something went wrong here');
//                 }
//             }
//         };

//         setTimeout(() => {
//             xhr.send();
//         }, Math.floor(Math.random() * 3000) + 1000);
//     });
// }


async function getAllDataWithFetch() {
    const moviesRes = await fetch('./movies.json');
    const movies = await moviesRes.json();

    const actorsRes = await fetch('./actors.json');
    const actors = await actorsRes.json();

    const directorsRes = await fetch('./directors.json');
    const directors = await directorsRes.json();

    console.log(movies, actors, directors);
}

// getAllDataWithFetch();

async function getAllDataPromiseAll() {
    const [moviesRes, actorsRes, directorsRes] = await Promise.all([
        fetch('./movies.json'),
        fetch('./actors.json'),
        fetch('./directors.json'),
    ]);

    const movies = await moviesRes.json();
    const actors = await actorsRes.json();
    const directors = await directorsRes.json();

    console.log(movies, actors, directors);
}


