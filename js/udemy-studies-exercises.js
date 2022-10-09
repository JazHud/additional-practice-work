//===============================================================================
///IF ELSE STATMENT
let five = 5
if (five > 10 ){
    console.log("yes this is greater than 10")
} else if ( five === 5){
    console.log("This number is equal to five")
} else {
    console.log("This number less than 10")
}
//// solution will not work if you start off with less than.
///////////play around with this to find reasoning then explain below///////////
//==================================================================================
//TERNARY OPERATOR
let sumNum = 12
let divisableByTwo = (sumNum % 2) ? "odd": "even";
///(sumNum % 2) <--- Condition
////   ?     <---- if true
////  "odd"  <---- first value
////    :    <----- if false
////  "even" <---- second value
console.log(sumNum);
console.log(divisableByTwo);
//================================================================================
//MULTIPLE CONDITIONS
// let age = prompt("how old are you")
// let maybeEnter = ((Number(age) >= 18)) ? "enter" : "access denied";
// console.log(maybeEnter);
// let isMember = true
// if ((Number(age) >= 18) && isMember){
//     console.log("Please Enter");
// } else {
//     console.log("You cant come in");
// }
// /// let numberAge = Number(age) will be a lot cleaner code;

//===================================================================================
let myTime = 2;
let output;
if(myTime < 12 && myTime > 6){
    output = "Good Morning";
} else if(myTime >= 11 && myTime <= 17){
    output = "Good Afternoon";
} else if(myTime > 17 && myTime < 23){
    output = "Good Evening";
} else {
    output = "I'm Sleeping";
}
console.log(output);



























