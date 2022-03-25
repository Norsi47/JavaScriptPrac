const string = 'The Revolution will not be televised.';
console.log(string);

const sglDbl = 'Quotes do not matter, can use "double quotes" as well';
console.log(sglDbl);

const escapeChar = ' "This\" is an escape character ';
console.log(escapeChar);

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

const greeting = `Hello, there`;


const name = 'Norsi';
const greetings = `Hello, ${name}`;
console.log(greetings);

const one = "Hello,";
const two = "how are you?";
const joined = `${one} ${two}`;
console.log(joined);

// now we use buttons
//needs to be put in html file
{/* <button>Press me</button>; */}

const buttons = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`)
}

buttons.addEventListener('click', greet);




const sayingHello = "Hello";
const names = "Norsi";
console.log(`${sayingHello}, ${names}`)

//can be done this way as well
const greeting2 = "Hello";
const name2 = "Chris";
console.log(greeting2 + ", " + name2); 

//using Numbers
const usingName = "Font";
const usingNum = 241;
console.log(`${usingName}, ${usingNum}`);

//converting string number to number
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

//converint number to string
const myNum2 = 123;
const  myString2 = myNum2.toString();
console.log(typeof myString2);

const song = 'Fight the youth';
const score = 9;
const highestScore = 10;
const output = `I Like the song ${song}. 
I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);

//to break lines
const output2 = `Hello there I am learning JavaScript.\nIt is very similar to Java.`;
console.log(output2);