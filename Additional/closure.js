// Ex: 1
function greet() {
    const message = "Good Morning";
    return function () {
       console.log(message)
    }
  }
  var cb = greet()
  cb()

  // Ex2
function b() {
    let x = 42;
    x = x + 1;
    return function () {
        console.log(x)
    }
  }
b()() //43

// Ex3
function counter() {
    let x = 0;
    return function () {
        x  = x + 1; // 'x' will get incremented
        console.log(x) // 'x' will get logged
    }
}

const counter1 = counter(); // c1 lexical scope
const counter2 = counter(); // c2 lexical scope

for(let x = 1; x <= 5; x++) {
    counter1();
}

for(let x = 1; x <= 3; x++) {
    counter2();
}