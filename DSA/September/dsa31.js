/*
Write a function `reverseString` that takes a string as input and returns the reverse of that string.
*/

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const result=reverseString('hello');
console.log(result);