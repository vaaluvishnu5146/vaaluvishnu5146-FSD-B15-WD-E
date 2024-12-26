function greetGoodEvening() {
    console.log("Good Evening")
}

greetGoodEvening();

// Providing input to this function
function add(a, b) {
    console.log(a + b)
}
add(10, 20);
add(100, 200);

// Greet function that prints message
function greet(message) {
    console.log(message)
}
greet("Good Morning");
greet("Good Afternoon");
greet("Good Evening");

// Print score
function printScore(score) {
    console.log(score)
}
printScore(30)

// Arguements
function compute(arg1, arg2) {
    console.log(arg1 * 10);
    console.log(arg2);
}
compute(10, "Data 2")


// Return statement
function computeAreaOfSquare(length, breath) {
   return length * breath;
}
var area = computeAreaOfSquare(10, 10);
console.log(area);