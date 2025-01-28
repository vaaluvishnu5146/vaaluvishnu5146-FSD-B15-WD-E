// Helps to run code post given delay
const timeout = setTimeout(greet, 5000);
function greet() {
    console.log("Good Evening")
}
clearTimeout(timeout);

// Helps to run code in certain interval
const intervalId = setInterval(greet2, 1000);
function greet2 () {
    console.log("Im Interval")
}
clearInterval(intervalId)