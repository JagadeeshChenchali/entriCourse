/*
6)Write a function truncateText that takes a string and a maximum length as input and returns a truncated version of the string if it exceeds the maximum length, adding "..." at the end.

    console.log(truncateText("This is a long sentence.", 10));
    // Output: "This is a..."
    console.log(truncateText("Short text.", 15)); 
    // Output: "Short text."
*/

function truncateText(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}
console.log(truncateText("This is a long sentence.", 10));
console.log(truncateText("Short text.", 15));
