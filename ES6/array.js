const arr = [1, 2, 3, 4, 5, 6];

// indexOf
console.log(arr.indexOf(6))

const data = [
    {
        id: 1,
        title: "One"
    },
    {
        id: 2,
        title: "two"
    }
];

// find
console.log(data.find((d) => d.id === 1));

// const res = [1, 2, 3, 4, 5].reduce(function (acc, current) {
//     acc.push(current*current);
//     return acc;
//  }, []);

// Return the sum of elements of given array
// ES: Reduce
const sumOfNum = arr.reduce((a, b) => a + b, 0);
console.log(sumOfNum)

// Core js
function sum(array = []) {
    let totalSum = 0;
    for(let i = 0; i < array.length; i++) {
        totalSum += array[i];
    }
    return totalSum;
}
console.log(sum(arr))

// Filter
// ES way
const filteredArray = arr.filter((e) => e % 2 != 0);
console.log(filteredArray);

// Core java way
function isEven(num = 0) {
    if(num % 2 == 0) {
        return true
    }
    return false;
}

function getEvenNums(array = []) {
    const filteredArray = [];
    for(let i = 0; i < array.length; i++) {
        if(isEven(array[i])) {
            filteredArray.push(array[i])
        }
    }
    return filteredArray;
}

console.log(getEvenNums(arr));


// Ecmascript way of creating and manupulating new array
const mappedArr = arr.map((value, index)  => {
    return value * 2
});

// Pure JS
// Example to multiply the elements by 2 and return a new array
function multiplyBy2(array = []) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * 2)
    }
    return newArr;
}
console.log(multiplyBy2(arr))

module.exports = {
    isEven
};