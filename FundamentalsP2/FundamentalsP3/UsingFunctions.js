//functions can only be done outside methods
var x = "Hello There";

exampleFunction();

function exampleFunction() {
    console.log("This is inside the function");
    console.log(x);
}

console.log("Outside the function");
console.log(x);

//using the same name in two js classes
//need to use ` not ' when using alert
const name = 'Norsi';
function greeting() {
    alert(`Hello ${name}: Welcome to our Company.`);
}

//using return values
function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
}

