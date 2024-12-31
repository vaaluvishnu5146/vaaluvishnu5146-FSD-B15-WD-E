var data = [1, 2, 3, 4, 5];
console.log(data);

/**
 * How to reverse the array
 */
data.reverse();
console.log(data);

/**
 * How to sort the array
 */
// var chars = ['ab', 'ad', 'ac', 'af'];
// chars.sort(function (a, b) {
//     return a - b
// });
// console.log(chars);

var nums = [10, -1, 100, 70, 39];
nums.sort(function (a, b) {
    return a - b;
});
console.log(nums);

var nums = [10, -1, 100, 70, 39];
nums.sort(function (a, b) {
    return b - a;
});
console.log(nums);

/**
 * Select and return the selective portion of an array 
 * 1. slice(startIndex, endIndex + 1)
 * 2. splice(startIndex, endIndex + 1) 
*/
var copySplicedArray = data.splice(0, 3);
console.log(copySplicedArray, data);

var copySlicedArray = data.slice(0, 3);
console.log(copySlicedArray, data);

/**
 * How to remove element from the first
 */
data.shift();
console.log(data);

/**
 * How to remove the last element
 */
data.pop();
console.log(data);

/**
 * Add element to the start of the array
 */
data.unshift(0);
console.log(data);

/**
 * Add element to the last place in the array
 * push(element)
 */
data.push(6)
console.log(data)
