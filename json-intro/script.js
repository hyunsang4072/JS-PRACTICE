const post = {
    id: 1,
    title: 'First',
    body: 'This is my first post ever',
};

// conver to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

console.log(str);

console.log(obj);

const posts = [
    {
        id: 1,
        title: 'First',
        body: 'This is my first post ever',
    },
    {
        id: 2,
        title: 'Second',
        body: 'This is my second post',
    },
];

const str2 = JSON.stringify(posts);

console.log(str2);


// Challenge
const library = [
    {
        title1: 'Harry Potter',
        author1: 'Cho',
        status1: {
            own1: true,
            reading1: false,
            read1: true,
        },
    },
    {
        title2: 'Mockingbird',
        author2: 'Jew',
        status2: {
            own2: false,
            reading2: true,
            read2: false,
        },
    },
    {
        titl3: 'Life of Pi',
        author3: 'Won',
        status3: {
            own3: true,
            reading3: false,
            read3: true,
        },
    },
];

const {
    title1, status1: {own1}
} = library[0];

console.log(title1, own1);


const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);













