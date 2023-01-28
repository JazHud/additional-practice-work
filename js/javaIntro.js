//Codeup JavaWorking With Data Types, Operators, and Variables

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var lilMer = 3;
var broBear = 5;
var herc = 1

function movieTotal(lilMer, broBear, herc){

    return ((lilMer * 3)+(broBear * 3)+ (herc *3))
}

console.log(movieTotal(lilMer,broBear,herc));

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var google = 400;
var amazon = 380;
var facebook = 350;

function totalPay(google, amazon, facebook){
    return ((google * 6)+(amazon * 4)+(facebook *10));
}

console.log(totalPay(google,amazon, facebook));

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let student = "not enrolled";
let classWanted = "not full";
let schedule = "no conflict"

function studentStatus(){
    if((student === "not enrolled") && (classWanted === "not full") && (schedule === "no conflict")){
        return "student enrolled";
    } else {
        return "student not enrolled";
    }
}

console.log(studentStatus())

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let items = 5;
let offer = "not expired";
let premiumMem = true;

function productOffer(){
    if(((items >= 3) || (premiumMem === true)) && (offer === "not expired")){
        return "you got an promo offer";
    }else{
        return "sorry your not applicable for this offer";
    }
}
console.log(productOffer());

//Use the following code to follow the instructions below:

var username = 'codeup';
var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:

// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
function lessThanFive(password){
    return password.length === 5;
}
console.log(lessThanFive(password));

function isIncluded(password){
    return !!password.includes(username);
}
console.log(isIncluded(password));

function lessThanTwenty(username){
    return username.length < 20;
}
console.log(lessThanTwenty(username));

function whiteSpace(username, password){
    return ((username.indexOf(" ") === 0) || (username.indexOf(" ") === username.length)) && ((password.indexOf(" ") === 0) || (password.indexOf(" ") === password.length));
}
console.log(whiteSpace(username, password));

//Javascript HTML

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false