/* 17) Adding and Removing Elements
Create an array called `fruits` with initial values ["apple", "banana"]. Using the appropriate array methods, perform the following actions:
- Add "orange" to the end of the array.
- Remove the last element from the array.
- Add "grape" to the beginning of the array.
- Remove the first element from the array.

Print the final array after each step.
*/

const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
fruits.shift();
console.log(fruits);
