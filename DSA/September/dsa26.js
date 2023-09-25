/*
**6. Prime Number Check:**
Write a program to check if a given number `n` is prime using a `for` loop.
*/

/*const n = 7;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);*/

function isPrime(number){
  let count = 0;
  for(let i = 1;i<=number;i++)    {
     if(number%i == 0){
        count = count + 1;
     }
  }
  if(count == 2){
     return true;
  }
  else{
     return false;
  }
}
console.log(isPrime(10));