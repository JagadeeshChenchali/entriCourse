/* 16)Color Selection
Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the color is available (true or false). If the color is available and the choice is "blue" or "green," return "Selected." If the choice is "red," return "Not available." For any other choice, return "Invalid choice."
*/

function selectColor(color, isAvailable) {
    if (isAvailable) {
        if (color === "blue" || color === "green") {
            console.log("Selected");
        } else if (color === "red") {
            console.log("Not available");
        } else {
            console.log("Invalid choice");
        }
    } else {
        console.log("Color not available");
    }
}
console.log(selectColor("red",true));