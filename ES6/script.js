/**
 * Keywords for creating variables
    1. var - Global Scoped
    2. let - Block Scoped
    3. const - Block scoped
*/

// Example 1: How Scoping works interns of multiple const 
var x = 10;

function house() {
    const y = 10;
}

function bunker() {
    const y = 100;
}

house();
bunker();

// Example 2: How Scoping works interns of multiple const 
var x = 10;

function house() {
    let y = 10;
}

function bunker() {
    let y = 100;
}

house();
bunker();

// Re-Initialization
var x;
x  = 10;
x = 20;

let y;
y = 10;
y = 30; 

const z = 30;
try {
    z  = 20;
    console.log(z);
} catch (error) {
    console.log(error)
}
console.log(z)

// Hoisting
console.log(a);
var a  = 10;

console.log(b);
let b = 20;
