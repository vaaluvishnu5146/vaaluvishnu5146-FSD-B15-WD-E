/**
 * Loops helps us to rn block or collection of statements for N times
 * 
 * Types of loops:
 * 
 * 1. For loop
 * 2. while
 * 3. do-while
 */

/**
 * FOR Loop
 */

// SYNTAX
// for(start; end; steps) {
//     console.log("Hello all");
// }

for(var x = 1; x <= 10; x=x+1) {
     console.log(x);
}
for(var y = 10; y >= 1; y = y - 1) {
    console.log(y)
}

/**
 * WHILE Loop
 */
var x = 1;
while(x <= 10) {
    console.log(x);
    x = x + 1;
}

/**
 * DO WHILE
 */
var x = 0;

do {
    console.log("Hahaha poor loop");
    x = x + 1;
} while (x < 1);

console.log(x);


/**
 * Print all the even number from 1 to 10
 */
for (var a  = 1; a <= 10; a = a + 1) {
    if (a % 2 == 0) {
        console.log(a)
    }
}

/**
 * Print all the odd number from 1 to 20
 */
for (var i = 1; i <= 20; i = i + 1) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

/**
 * Print all the elements in the given array
 */
var numbers = [10, 3, 4, 7, 8, 11, 3];

for (var j = 0; j < 7; j = j + 1) {
    console.log(numbers[j])
}
