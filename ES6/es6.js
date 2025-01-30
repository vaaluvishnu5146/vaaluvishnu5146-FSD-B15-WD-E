// Template Literals
function generateEmail(name, by) {
    return `Hey ${name}, We welcome you aboard!. We wish you all the best for your upcoming chapters. <br>Thanking you:${by}`;
}
console.log(generateEmail("Vishnu", "Gui Team"))
console.log(generateEmail("Gokul",  "Gui Team"))
console.log(generateEmail("Parasu",  "Gui Team"))

/// Spread and Rest Operators
var x = 10;
var y = x;
console.log(x, y);

// Spread Op with Array
// Ex1: Copy array into another array using For Loop
const arr = [1, 2, 3, 4, 5];
const arrCopy = [];

for(let x = 0; x < arr.length; x++) {
    arrCopy.push(arr[x])
}
console.log(arr, arrCopy);

// Ex2: Copy array into another array Rest Operator
const arr = [1, 2, 3, 4, 5];
const arrCopy = [...arr];

console.log(arr, arrCopy);

// Ex3: Copy array into another array using JSON module
const arr = [1, 2, 3, 4, 5];
const arrCopy = JSON.parse(JSON.stringify(arr));

console.log(arr, arrCopy);

// Spread OP with Object
// Ex1: Copy array into another array using For Loop
const data = {
    name: "Vishnu",
    age: 29
}
const dataCopy = {};

const keys = Object.keys(data);

for(let x of keys) {
    dataCopy[x] = data[x];
}

console.log(data)
console.log(dataCopy)

// Ex2: Copy array into another array Rest Operator
const data = {
    name: "Vishnu",
    age: 29
}
const dataCopy = {...data};

console.log(data)
console.log(dataCopy)

// Ex3: Copy array into another array using JSON module
const data = {
    name: "Vishnu",
    age: 29
}
const dataCopy = JSON.parse(JSON.stringify(data));

console.log(data, dataCopy);

// REST OPERATOR
function add(a, b, ...c) {
    console.log(c)
    return a + b;
}
console.log(add(10, 20, 30, 40, 50, 60, 70))


// Array and Object Destructuring
// Array D
const [a, b, c] = [30];
console.log(a, b, c)

// Object D
const { name, age, lang } = {
    name: "Vishnu",
    age: 29,
    lang: []
}
console.log(name, age, lang)