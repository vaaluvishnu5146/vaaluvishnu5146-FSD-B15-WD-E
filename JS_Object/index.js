var info = {
    name: "Vishnu Vardhan",
    email: "vishnu@test.com",
    age: 29
};

/**
 * Get the list of all the values
 */
var valuesOfInfo = Object.values(info)
console.log(valuesOfInfo)

/**
 * Get the list of all the keys in the object
 */
var keysOfInfo = Object.keys(info);
console.log(keysOfInfo);

for (var i = 0;  i < keysOfInfo.length; i = i + 1) {
    console.log(keysOfInfo[i], "=", info[keysOfInfo[i]] )
}

/**
 * Helps us to return the array of key and values pairs array
 */
console.log(Object.entries(info));