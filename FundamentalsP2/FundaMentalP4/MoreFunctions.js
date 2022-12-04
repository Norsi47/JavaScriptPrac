// let sayHi = function () {
//     alert("Howdie");
// };
// alert(sayHi());

//ask user question
function askUser(questions, yes, no) {
    if (confirm(questions)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

//callback functions
function showCancel() {
    alert("You canceled the execution");
}

askUser("Do you agree?", showOk, showCancel);

//shorter version of the top
function ask(userQuestion, userYes, userNo) {
    if (confirm(userQuestion)) userYes()
    else userNo();
}

ask(
    "Do you agree user?",
    function () {
        alert("You agreed 1.");
    },
    function () {
        alert("You Canceled the execution 2.");
    }
);

let sum = function (a, b) {
    return a + b;
};

//asking user to enter age
let age = prompt('what is your age?', 18);

let welcome;

if (age < 18) {
    welcome = function () {
        alert('Hello you are underage ');
    };
} else {
    welcome = function () {
        alert("Greetings you are old enough!");
    };

}

welcome();

//shorter version of the top
let userAge = prompt("User what is your age?", 21);
let usersGreetings = (userAge < 21) ?
    function () {
        alert("Not old enough to drink");
    } :
    function () {
        alert('Old enough to drink!');
    };

usersGreetings();

//do the same thing but with my examples