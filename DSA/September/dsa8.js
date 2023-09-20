/*8)Leap Year Check
Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap year."
*/

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}
console.log(isLeapYear(1700));