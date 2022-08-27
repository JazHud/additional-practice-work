// Write a function that accepts an array of numbers and returns its average.
// Bonus: if there are any non numeric values in the array, return false. Numeric strings should count as numeric values.
//
//Write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
//Bonus: if there are any values that are not strings return false.

function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || typeof value === null);
}

let array = [5, 10, 15];

let array2 = [-25, -22, 258, 68];

let array3 = ["notANumber", 25, 78]

function arrayAverage(array){
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        if (!isNumber(array[i])){            // <-to read "notANumber" and put it as false
            return false;                   //
        }
        total += array[i];
    }
    return total/array.length;
}


////////My wrong solution;
// let numArray = [2, 3, 4, 5, 6, 6, 5, 3, 4];
//
//
// console.log(numArray);
//
// function aveNumArray(numArray){
//     for(let i = 0; i < numArray.length; i++){
//         return ((numArray[i]++) / numArray.length);
//     }
//
// }
// console.log(aveNumArray());



let stringArray = ["Jaz", "Jonathan", "Gary"];

function longestString(arrayOfStrings){
    let longest = "";
    for (let i = 0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length){ ///<---- this {} is not a must
            longest = arrayOfStrings[i];
        }
    }
    return longest;
}

let string = "Hi how are are you doing today?"
function reverseString(string){
    return string.split("").reverse().join("");
}
//elaborate on this idea
let yummyFoods = ['Burgers', 'Pizza', 'Spaghetti', 'Tacos']
    for (let i = 0; i < yummyFoods.length; i++){
        console.log(yummyFoods[i]);
}


///exercises to build knowledge
let myName =["J", "A", "Z", "M", "I", "N", "E"]
for (let i = 0; i < myName.length; i++){
    console.log(myName[i]);
}


