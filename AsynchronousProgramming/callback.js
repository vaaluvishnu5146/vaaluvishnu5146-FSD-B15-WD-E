// Helps to run code post given delay
setTimeout(greet, 5000);
function greet() {
    console.log("Good Evening")
}

// Helps to run code in certain interval
setInterval(greet2, 1000);

function greet2 () {
    console.log("Im Interval")
}

isEven(11, printResult)

function printResult(message = "") {
    console.log(message)
}

function isEven(num = 0, cb = () => {}) {
    if(num % 2  === 0) {
        cb("Number is Even")
    } else {
        cb("Number is Odd")
    }
}

// Bank account
const details = {
    currentBalance: 100
};

// Callback using Promises
function sendMoney(amount = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= details.currentBalance) {
                resolve("Transfer complete")
            } else {
                reject("Insufficient balance")
            }
        }, 2000)
    })
}

sendMoney(99)
.then((result) => {
    console.log("Result ==>", result)
})
.catch((err) => {
    console.log("Error", err)
})

console.log("One")

sendMoney(101)
.then((result) => {
    console.log("Result ==>", result)
})
.catch((err) => {
    console.log("Error", err)
})

console.log("Two")

async function test() {    
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Error occurred")
            }, 3000)
        });
        console.log(result);
        console.log("dadasd");
        console.log("iodj");
    } catch (error) {
        console.log(error)
    }
}

test(); 











