/*2)Write a JavaScript function to convert a string into abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/

function abbrev_name (string) 
{
    let split_string = string.trim().split(" ");
    if (split_string.length > 1) 
    {
        return (split_string[0] + " " + split_string[1].charAt(0) + ".");
    }
    return split_string;
};
console.log(abbrev_name("Robin Singh"));

/*function abbrev_name (string) 
{
    let split_string = string.split(" ");
    if (split_string.length > 1) 
    {
        return (split_string[0] + " " + split_string[1].charAt(0) + ".");
    }
    return split_string;
};
console.log(abbrev_name("Robin Singh"));*/