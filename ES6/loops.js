const { isEven } = require('./array') ;

/**
 * For loop
 * foreach
 * for in -- Array, object
 * for of -- Array
 * while
 */
let x = 0;
while(x <= 10) {
    console.log(x)
    x++;
}


const data = {
    name: "Vishnu",
    age: 29
};

// For of
for(let x of data) {
    console.log(x)
}

// For in
for(let x in data) {
    console.log(x)
}



const arr = [1, 2, 3, 4, 5];

// For in
for(let x in arr) {
    if(isEven(arr[x])) {
        console.log(x)
    }
}

// For of
for(let x of arr) {
    console.log(x)
}


// forEach
arr.forEach((value) => console.log(value))