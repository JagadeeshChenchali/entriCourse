/*
**Question 1: Reverse a String**

Write a function `reverseString` that takes a string as input and returns the reverse of that string.
*/

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = "hello";

const result = reverseString(string);
console.log(result);