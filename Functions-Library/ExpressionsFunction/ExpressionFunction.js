// function sayHI(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }
// function showOk() {
//     alert("You Agreed.");
// }
// function showCancel() {
//     alert("You Canceled the execution.");
// }

// alert("Do you agree?", showCancel, showOk);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { 
        alert("You agreed."); }
        ,
    function() { 
        alert("You canceled the execution."); 
    }
  );

//   sum = function (a, b){
//     const a = 2;
//     const b = 2;
//     return a + b;
//   }
function ranNum() {
    const a = 2;
    const b = 2;
    return a + b;
}
alert(ranNum());


  // Function Declaration
// function sum(a, b) {
//     return a + b;
//   }


//but this way is better
  let age = prompt("What is your age?", 18);

  if (age < 18) {
    
    welcome = function() {
        alert("Howdie!");
    };
  }
    else {
        welcome = function() {
            alert("Greetings!");
        }
    }
  welcome();

  //another way 
//   let age2 = prompt("What is your age?", 18);

// let welcome2 = (age2 < 18) ?
//   function() { 
//       alert("Hello!"); } :
//   function() {
//        alert("Greetings!"); };

// welcome2();

 