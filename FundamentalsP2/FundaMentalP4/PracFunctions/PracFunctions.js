//testing text box asking user
function askUserQuestion(askUser, userAgreed, userDenies) {
    /*if user confirms question do this if agreed
    * or do this if ignored*/
    if (confirm(askUser)) userAgreed()
    else userDenies();
}

askUserQuestion(
    "User do you agree to this?",
    function () {
        alert("You agreed to this.");
    },
    function () {
        alert(" Did not agree");
    }
);

//asking users for age
let usersInputAge = prompt("Are you old enough to drink?", 21);
let logicToTell = (usersInputAge < 21) ?
    function () {
        alert("Not old enough to drink");
    } :
    function () {
        alert("You are old enough");
    };

logicToTell();
