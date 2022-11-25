var today = new Date();
    var day = today.getDay();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log("Today is : " + daysOfWeek[day] + ".");

    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var amOrPM = (hr >= 12)? " PM ":" AM ";
    hr = (hr >= 12)? hr - 12: hr;
    if (hr === 0 && amOrPM === ' PM '){
        if(min === 0 && sec === 0){
            hr = 12;
            amOrPM = ' Noon';
        } else {
            hr = 12;
            amOrPM = ' PM'
        }
    }
    if (hr === 0 && amOrPM === ' AM '){
        if(min === 0 && sec === 0){
            hr = 12;
            amOrPM = ' Midnight';
        } else {
            hr = 12;
            amOrPM = ' AM'
        }
    }
    console.log("Current Time : " + hr + amOrPM + " : " + min + " : " + sec);

    //learn to understand the function of ? better!