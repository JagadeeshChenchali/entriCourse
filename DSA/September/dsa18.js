/* 18)Queue Operations
Implement a queue using an array. Create a queue called `myQueue` and perform the following operations:
- Enqueue the values "a", "b", and "c" into the queue.
- Dequeue an element from the queue.
- Enqueue the value "d" into the queue.

Print the queue after each operation.
*/

const myQueue = [];
myQueue.push("a");
myQueue.push("b");
myQueue.push("c");
console.log(myQueue);
myQueue.shift();
console.log(myQueue);
myQueue.push("d");
console.log(myQueue);
