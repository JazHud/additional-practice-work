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
//===================================================================================
///setting default values

adder1(); // if arguments are put the default values of 5 & 9 gets overruled;

function adder1(num1, num2){
    (num2 = num2 || 5) && (num1 = num1 || 9);
    console.log("number 1 " + num1);
    console.log("number 2 " + num2);
}
//////////////////////////////////////////////////////////////////////////////////////
//FUNCTION DECLARATION
//      ::::are hoisted to the top of the code by the browser before any code is executed.
//      ::::used when a function needs to be called before it is declared
let a = 3;
let b = 8;
function multiply(a, b){
    return a * b;
}
console.log(multiply(a,b));
////FUNCTION EXPRESSION
let c = 4;
let d = 7;
let multiply2 = function (c,d){
    return c * d;
}
console.log(multiply2(c,d));
////////////////////////////////////////////////////////////////////////
///// DOM function that shows the number of clicks in console
const btns = document.querySelectorAll("button");
console.log(btns);
btns[0].onclick = message1;
btns[1].onclick = message2;
btns[2].onclick = message3;

let var1 = 0;
let var2 = 0;
let var3 = 0;

function message1(){
    var1++;
    message();
}
function message2(){
    var2++;
    message();
}
function message3(){
    var3++;
    message();
}
function message(){
    console.log(var1 + ' ' + var2 + ' ' + var3);
}
////////////////////////////////////////////////////////////////////////RECURSION::::   a function that can refer to and call itself;

function loop(x){
    if(x >= 10) return;
    console.log(x);
    loop(x +1); //<--the recursive call
}
loop(0);

///below another loop using recursion
let magicNum = 5;
let guess;
guesser();

function guesser(){
    guess = prompt("Guess the number");
    let guessNumber = Number(guess);
    if(guessNumber === magicNum){
        console.log("You got it");
        return;
    }else{
        let message = (guessNumber < magicNum) ? "higher" : "lower";

        console.log("wronge GO " + message);
        guesser(); 
    }
}

////////IIFE FUNCTIONS Immediately Invoked Function Expression
///  ::also know as Self-Executing Anonymous Function

//such as      (function() {
//                 statments
//             })();

(function(firstName) {
    console.log("welcome " + firstName);
})("Jazmine");

let result = (function(){
    return "Hello World"
})();     //<---() immediately invokes the function
console.log(result);
/////////////ARROW FUNCTIONS///////////////////////////

let testAdd = function (num){
    return num + 3;
}

let testAdd2 = (num) => num + 3;
console.log(testAdd(3));
console.log(testAdd2(3));

let average = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
}
console.log(average(1, 2, 3))
///////////////////////OBJECT MODELS//////////////////////////////
