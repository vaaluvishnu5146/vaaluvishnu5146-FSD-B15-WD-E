/**
 * 4 Types of functions:
 * 1. Normal or Named functions
 * 2. Anonymous
 * 3. IIFE
 * 4. Arrow Functions
 */

// Ex: Named fn
one();
function one() {
    console.log("Named function")
}
one()
// Ex: Anonymous Fn
// We can use this anonymous fn as callbacks or predicate
var a = function (a, b) {
  // statements
  console.log("Helooooo")
}
a("", "");

(a, b) => {
    // statements
}

// IIFE - IMMEDIATELY INVOKING FUNCTION EXPRESSION
// This function will call itself for once
(function (a, b) {
    console.log(a, b)
})(10, 20);

((a, b) => {
    console.log(a, b)
})(10, 20);

// ARROW FUNCTION
console.log(fn) // undefined
var fn = () => {
    console.log("Arooowww")
}
fn();

// let = 13;
// ++let;
// console.log(let)

// let x = 10;