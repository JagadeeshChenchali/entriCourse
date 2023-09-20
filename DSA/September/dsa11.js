/* 11)Even or Odd
Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is even, and "Odd" if the number is odd.
*/

function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
console.log(evenOrOdd(6));