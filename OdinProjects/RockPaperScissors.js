//ways to show message in page

console.log("Hello World");

alert("Hello World_using alert");

/*
method to write message in <body>
 instead of doing it in html*/
document.write("Hello World_Using document.write method");

/*picks the element and writes message in there
* for example "body" is the element, <body>
element can be anything in html format*/
let htmlBody = document.querySelector("p");
htmlBody.innerText = "Testing using document.querySelector";
//or
let htmlHeader =document.querySelector("h1")
htmlHeader.innerHTML = "Header h1 - innerHTML";
