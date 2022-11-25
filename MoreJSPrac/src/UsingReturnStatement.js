//testing out js return statements
const myText = "The Weather is Cold";
const newString = myText.replace("Cold", "warm")//will replace Cold with warm
console.log(newString);


// squaredTest is method name
//what is inside() is the parameter
function squaredTest(num) {
    return num * num;
}

function cubedTest(num) {
    return num * num * num;
}

//adding numbers 3 times
function addedNumbers(addNum) {
    return addNum + addNum + addNum;

}

//dividing by 2
function divideNumbers(divNum) {
    return divNum / 2;
}
//subtract by 2
function subNumbers(subNum) {
    return subNum - 2;
}

function factorialTest(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;  //this also means num = num * x;
        x--;
    }
    return num;

}

//printing out information about number entered into the text input
input.addEventListener("change", () => {
   const num = parseFloat(input.value);
   if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
   } else {
       //go into squaredTest "method" at line 8 and come here
       //{num} prints out the number user inputs
       para.textContent = `User input:${num} squared is ${squaredTest(num)}. `;

       para.textContent += `User input:${num} cubed is ${cubedTest(num)}. `;

       para.textContent += `User input:${num} factorial is ${factorialTest(num)}. `;
       para.textContent += ` User input:${num} this number added 3 times is ${addedNumbers(num)} `;

       para.textContent += ` User input:${num} this number divided by 2 is ${divideNumbers(num)} `;
       para.textContent += ` User input:${num} this number subtracted by 2 is ${subNumbers(num)} `;


   }

});

let userName = 'John';
function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
}

showMessage();

//using outer variable
let varName = 'Norsi';
function showMeMessage() {
    varName = "Nors"; //this changes the outer variable 'Norsi'

    let messages = 'Hello, ' + varName;
    alert(messages)
}
alert(varName); //will call Norsi first, then print out Nors
showMeMessage();

alert(varName); //then prints out modified name