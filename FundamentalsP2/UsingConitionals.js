//using if and else in java
if (10 < 18) {
    greeting = "Hello Good Day";
} else {
    greeting = "Good Evening";
}
console.log(greeting);

//using or "||"
let hour = 9;
if(hour < 10 || hour > 11) {
    alert ('True');
}

//letting user type in
let userInfo = prompt("What is 2 * 2?");
if (userInfo == 4) {
    alert('You got it right!');
}
else {
    alert('Incorrect!');
}

//using switch statements
//some imperfections to logic but you get the drift
let userGrade = prompt("Hello what is your grade");

switch(true) {
    case userGrade >= 100:
        console.log('Congrats you got an A+');
        break;
    case userGrade >= 90 || userGrade <= 95:
        alert('Nice you got and A');
        break;
    case userGrade >= 80 || userGrade <= 85:
        alert('You got a B, not bad');
        break;
    case userGrade <= 70 || userGrade <= 50:
        console.log("You did not do so well, but there is room for improvement");
        break;
    default:
        alert('Something Went terribly wrong!');    


}
