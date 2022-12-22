//asking user to input number
let usersAnswer = parseInt(prompt("Enter the number you would like to FizzBuzz up to: "));

//for loop to loop from 1 till entered number
//usally starts from 0 (i = 0) but starting from 1 at this point due to the need of the game being programmed
for(i = 1; i <= usersAnswer; i++) {
    //if number is divisible by 3 (no remainder)print fizz
   /* use % to let us know if there is a remainder or not,
   * is the remainder of 3 = to 0? if so print fizz*/
    if(i % 3 === 0) {
        console.log("Fizz");
    }
    //if divisible by 5 with no remainder
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    //else just print out number
    else {
        console.log(i);
    }
    //streak again 12/21

}