/* 19)Shopping List
Create an empty array called `shoppingList`. Using the appropriate methods, add the items "eggs", "milk", "bread", and "vegetables" to the shopping list. Then, remove the "bread" from the list.

Print the shopping list after each operation.
*/

const shoppingList = [];
shoppingList.push("eggs");
shoppingList.push("milk");
shoppingList.push("bread");
shoppingList.push("vegetables");
console.log(shoppingList);
shoppingList.splice(shoppingList.indexOf("bread"), 1);
console.log(shoppingList);
