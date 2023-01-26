/*Different ways to use arrays
* Good prac to use const*/
const cars = ["GMC", "Chevy", "Toyota"];
//can pick which one to print out
console.log(cars[2], ", Array Length of Cars:", cars.length)

const moreCars = [];
moreCars [0] = "Honda";
moreCars [1] = "Buick";
moreCars [2] = "Ford";
//can pick the number or print the whole thing
console.log(moreCars [2]);
//changing arrays
moreCars [1] = "Fisher Man";
console.log("Printing all cars ->" +moreCars);

const usersInfo = {firstName: "Felix", lastName: "Alvez", age: 26};
let userLength = usersInfo.length;
console.log("Users Fname and Lname-> " + usersInfo.firstName, usersInfo.lastName + " Length of Array " + userLength);




