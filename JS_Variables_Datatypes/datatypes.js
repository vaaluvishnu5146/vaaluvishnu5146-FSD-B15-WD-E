// 1. Number
// 2. String
// 3. Boolean
// 4. Symbol
// 5. Array
// 6. Object
// 7. Null
// 8. undefined

// TYPEOF KEYWORD
/**
 * typeof keyword will help us to identify the datatype of the given input
 */

// NUMBERS
var age = 10;
console.log(typeof age); // 10

var cartAmount = 100.09;
console.log(typeof cartAmount) // 100.09

console.log(age + cartAmount) // 110.09

// STRINGS
var first_name  = "Vishnu";
var last_name = "Vardhan";

// CONCATINATION
console.log(first_name + " " + last_name); //Vishnu vardhan
console.log(first_name + 10) // Vishnu10
console.log(10 + first_name ) // 10Vishnu

// Boolean
// true or false
var isMarried = true;
console.log(typeof isMarried); // false

// Array
var names = ["Vishnu", "Gokul", "Santa", "Cakes"];

// Print the whole array
console.log(names)
// Print the element at given index
console.log(names[3])
// undefined in the below case
console.log(names[-1])

// Changes gokul to Jingle bells
names[1] = "Jingel bells"
console.log(names)

// OBJECTS
var data = {
    name: "Vishnu",
    age: 28,
    isMarried: true,
    languages: ['Tamil', 'English', "Kannada", 'Japanese'],
    isVotable: false,
    address: {
        addressLine1: "Line 1",
        addressLine2: "Line 2"
    }
};

// Access deep nested object
console.log(data.address.addressLine1);

// delete a key from object
delete data.isVotable;
console.log(data);

// Access languages array
console.log(data.languages[0]);

// CHange the value of isMarried
data.isMarried = false;
console.log(data);

// Print values using name
console.log(data.age);
console.log(data.name); // Vishnu

// Print the whole object
console.log(data);