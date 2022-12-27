const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2); //this is wrong because .push() is used for array methods and not strings
//.concat is correct
const message1 = str1.concat(str2);