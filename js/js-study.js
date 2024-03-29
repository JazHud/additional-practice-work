// -- Write a function that takes in an input, checks that input, and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is)
let myWord = "Me"
let myNum = 3
let thisThing;
function whatAmI(input){
    // if (typeof input === typeof input){
    //     return true;
    // }
    if ((typeof input === "string") || (typeof input === "number")) {
        return true
    }
}
console.log(whatAmI(myNum));
console.log(whatAmI(myWord));
console.log(whatAmI(thisThing));

// -- Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)

function doubleNumber(number){
    return number * 2;
}

function doubleString(string){
    return string.concat(' ', string);
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
function removeFirstElement(array){
    array.shift();
    return array; //.shift() changes the array so it needs to be called again to see that mutated array
}
function removeFirstToLastElement(array) {
    let firstElement = array.shift();
    array.push(firstElement)
    return array;
}


// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)
function removeOdds(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function double(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            newArray.push(array[i] * 2);
        }
    }
    return newArray;



// -- Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values


// -- Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property
let cityAndState = "San Antonio, Texas"

function cityStateObject(cityAndState){
    return {
        city: cityAndState.split(', ')[0],
        state: cityAndState.split(', ')[1],
    }
}

// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
///////LOOK BELOW
// -- Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties

function analyzeString(string){
    return {
        length: string.length,
        firstLetter: string.charAt(),
        lastLetter: string.charAt(string.length -2)
    }
}

// -- Write a function that takes in a string and modifies it in some way.  Example write a function that takes in a string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.
let myString = "This is my string. My fave number is 3. How do you like it?"
function redoIt(yeah, nope){
    return myString.replaceAll("a", "4");
}
console.log(redoIt(myString))

// Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string.
function capSome(){
    for(let i = 0; i < myString.length; i++){
    }
}

console.log(capSome());
//     /**
//      * Get Sum of People's Budget
//      * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//      *
//      * Examples
//      *
//      * >> getBudgets([
//      *        { name: "John", age: 21, budget: 23000 },
//      *        { name: "Steve",  age: 32, budget: 40000 },
//      *        { name: "Martin",  age: 16, budget: 2700 }
//      *    ]) ➞ 65700
//      * >> getBudgets([
//      *        { name: "John",  age: 21, budget: 29000 },
//      *        { name: "Steve",  age: 32, budget: 32000 },
//      *        { name: "Martin",  age: 16, budget: 1600 }
//      *    ]) ➞ 62600
//      */
//
//
//     /**
//      * Get Student Top Notes
//      * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top          notes. If the student does not have notes then let's assume their top note is equal to 0.
//      *
//      * Examples
//      *
//      * >> getStudentTopNotes([
//      *      {
//      *         id: 1,
//      *         name: "Jacek",
//      *         notes: [5, 3, 4, 2, 5, 5]
//      *       },
//      *      {
//      *         id: 2,
//      *         name: "Ewa",
//      *         notes: [2, 3, 3, 3, 2, 5]
//      *       },
//      *      {
//      *         id: 3,
//      *         name: "Zygmunt",
//      *         notes: [2, 2, 4, 4, 3, 3]
//      *       }
//      *    ]) ➞ [5, 5, 4]
//      */

const students = [
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5]
    },
   {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5]
    },
   {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3]
    }
]

// function getStudentsTopNotes(arryofStudentsObjects){
//     const topNotes = [];
//     arryofStudentsObjects.forEach(studentsObject => {
//         topNotes.push(Math.max(...studentsObject.notes)); ///Math.max(..., so an array can work
//     });
//     return topNotes;
// }

////////can aslo be solved like below only using for loops and conditionals
function getStudentsTopNotes(arrayOfStudentsObjects){
    let topNotes = [];
    for (let i = 0; i < students.length; i++){
        let topNote = arrayOfStudentsObjects[i].notes[0];
        for (let j= 0; j < arrayOfStudentsObjects[i].notes.length; j++){
            if (arrayOfStudentsObjects[i].notes[j] > topNote){
                topNote = arrayOfStudentsObjects[i].notes[j];
            }
        }
        topNotes.push(topNote);
    }
    return topNotes
}

//
//
//     /**
//      * TODO:
//      * Remove the Letters ABC
//      * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//      *
//      * Examples
//      * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//      * >> removeABC("hello world!") ➞ null
//      * >> removeABC("") ➞ null
//      *
//      * Notes
//      * If the given string does not contain "a", "b", or "c", return null.
//      */
//
//
//     Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.
//
// Examples...
//
// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
//
//
// Write a function that accepts the top three bowling scores and returns the average.
// 1. write a function
// 2. pass in parameters
// 3. 3 scores ( variables)
// 4. return something (number)
//
// let first = 120;
// let second = 234;
// let third = 90;
//
// Modify the function to accept an array of bowling scores and return the average
//
// Write a function that accepts an array of bowling scores and returns the highest
//
// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3
