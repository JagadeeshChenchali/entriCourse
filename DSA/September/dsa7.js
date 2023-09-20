/*
7)Time of Day Greeting
Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for hours 12-17, and "Good evening" for hours 18-23.
*/

 
        function greetTimeOfDay(hour) {
            if (hour >= 6 && hour <= 11) {
                console.log("Good morning");
            } else if (hour >= 12 && hour <= 17) {
                console.log("Good afternoon");
            } else if (hour >= 18 && hour <= 23) {
                console.log("Good evening");
            }
            return hour;
        }
        console.log(greetTimeOfDay(13.11));
    
