//testing out js return statements
const myText = "The Weather is Cold";
const newString = myText.replace("Cold", "warm")//will replace Cold with warm
console.log(newString);


// squaredTest is method name
function squaredTest(num) {
    return num * num;
}

function cubedTest(num) {
    return num * num * num;
}

//adding two numbers
function addedNumbers(addNum) {
    return addNum + addNum + addNum;

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
       para.textContent = `${num} squared is ${squaredTest(num)}. `;

       para.textContent += `${num} cubed is ${cubedTest(num)}. `;

       para.textContent += `${num} factorial is ${factorialTest(num)}. `;

       para.textContent += ` ${num} this number added 3 times is ${addedNumbers(num)} `;

   }

});