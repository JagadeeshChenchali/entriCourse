/*
**3. Fibonacci Sequence:**
Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.
*/

const n = 7;
let first = 0, second = 1, next;
console.log(first); // 0
console.log(second); // 1
for (let i = 2; i < n; i++) {
  next = first + second;
  console.log(next);
  first = second;
  second = next;
}
// 0  1      1        2       3          5         8
// 0  1    0+1    1+1   2+1     3+2     5+3
