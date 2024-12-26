/**
 * CONDITIONAL STATEMENTS
 * Letting code to take decisions
 * 
 * Types of conditional statements:
 * 
 * 1. if else
 * 2. switch
 * 
 */

var age = 17;

if (age < 18) {
    console.log("Candidate is not eligible for voting")
}  else {
    console.log("Candidate is eligible")  
}

var pocketMoney = 99;

if  (pocketMoney < 100) {
    console.log("COMBO A")
} else if(pocketMoney >= 100 && pocketMoney <= 200) {
    console.log("COMBO B")
} else {
    console.log("COMBO C")
}

// SWITCH STATEMENT
var type = "morning";

switch (type) {
    case "morning":
        console.log("Good Morning")
        break;
    case  "afternoon":
        console.log("Good afternoon")
        break;
    case "evening":
        console.log("Good Evening")
        break;
    default:
        console.log("Good night")
        break;
}