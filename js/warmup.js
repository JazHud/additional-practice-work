// // Write a function that accepts an array of numbers and returns its average.
// // Bonus: if there are any non numeric values in the array, return false. Numeric strings should count as numeric values.
// //
// //Write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
// //Bonus: if there are any values that are not strings return false.
//
// function isNumber(value){
//     return !(isNaN(value) || typeof value === "boolean" || typeof value === null);
// }
//
// let array = [5, 10, 15];
//
// let array2 = [-25, -22, 258, 68];
//
// let array3 = ["notANumber", 25, 78]
//
// function arrayAverage(array){
//     let total = 0;
//     for(let i = 0; i < array.length; i++) {
//         if (!isNumber(array[i])){            // <-to read "notANumber" and put it as false
//             return false;                   //
//         }
//         total += array[i];
//     }
//     return total/array.length;
// }
//
//
// ////////My wrong solution;
// // let numArray = [2, 3, 4, 5, 6, 6, 5, 3, 4];
// //
// //
// // console.log(numArray);
// //
// // function aveNumArray(numArray){
// //     for(let i = 0; i < numArray.length; i++){
// //         return ((numArray[i]++) / numArray.length);
// //     }
// //
// // }
// // console.log(aveNumArray());
//
//
//
// let stringArray = ["Jaz", "Jonathan", "Gary"];
//
// function longestString(arrayOfStrings){
//     let longest = "";
//     for (let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length){ ///<---- this {} is not a must
//             longest = arrayOfStrings[i];
//         }
//     }
//     return longest;
// }
//
// let string = "Hi how are are you doing today?"
// function reverseString(string){
//     return string.split("").reverse().join("");
// }
// //elaborate on this idea
// let yummyFoods = ['Burgers', 'Pizza', 'Spaghetti', 'Tacos']
//     for (let i = 0; i < yummyFoods.length; i++){
//         console.log(yummyFoods[i]);
// }
//
//
// ///exercises to build knowledge
// let myName =["J", "A", "Z", "M", "I", "N", "E"]
// for (let i = 0; i < myName.length; i++){
//     console.log(myName[i]);
// }
//
// ////personal web exercises found
// const kelvin = 0;
// //kelvin will stay constant with the const
// let celcius = kelvin - 273;
// // temp conversion from kelvin to celsius
// let fahrenheit = celcius * (9/5) + 32
// //temp conversion from celsius to fahrenheit
// fahrenheit = Math.floor(fahrenheit);
// //to make the decimal number to a whole number
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//
//
// let newton = celcius * (33/100);
// newton = Math.floor(newton);
// console.log(`The temperature is ${newton} degrees Newton.`);
//
// const kelvin = 0;
// //kelvin will stay constant with the const
// let celcius = kelvin - 273;
// // temp conversion from kelvin to celsius
// let fahrenheit = celcius * (9/5) + 32
// //temp conversion from celsius to fahrenheith
// fahrenheit = Math.floor(fahrenheit);
// //to make the decimal number to a whole number
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//
//
// let newton = celcius * (33/100);
// newton = Math.floor(newton);
// console.log(`The temperature is ${newton} degrees Newton.`);
//

////// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22},
];


    function calculateTotalStudents(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i].students;
        }
        return sum;

// If this stumps you , try starting with the simpler form of the problem: write a function that calculates the sum of the elements of an array.  Thus, if you give it
        let numericArray = [8, 10, 20];

        function arraySum(array) {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            return sum;
        }
    }


////// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`
//
// //convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
//
// const convertToObject = function(nameOfClass, numberOfStudents){
//         return {
//             class: nameOfClass,
//             numberOfStudents: numberOfStudents
//         }
// }
//console.log(convertToObject("Intro to Programming", 20));
    /// arrow function of the function above
const convertToObject = (nameOfClass, numberOfStudents) => {
    return {
        class: nameOfClass,
        numberOfStudents: numberOfStudents
    }
    console.log(convertToObject("Intro to Programming", 20));

    //could also do
    let myFunction = convertToObject;
    console.log(myFunction("Into to React", 6));


// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
    const neighborhood1 = {
        neighborhood: "Lovely Estates",
        medianHomePrice: 280000,
        pool: true,
        tennis: false,
        crimeRate: "low",
        schools: [
            {name: "ES1", rating: 8},
            {name: "MS2", rating: 6},
            {name: "HS3", rating: 8}
        ]
    }

    const neighborhood2 = {
        neighborhood: "Luminous Estates",
        medianHomePrice: 270000,
        pool: true,
        tennis: false,
        crimeRate: "low",
        schools: [
            {name: "ES1", rating: 8},
            {name: "MS2", rating: 8},
            {name: "HS3", rating: 8}
        ]
    }

    const neighborhood3 = {
        neighborhood: "Ginormous Ego Estates",
        medianHomePrice: 350000,
        pool: true,
        tennis: true,
        crimeRate: "low",
        schools: [
            {name: "ES1", rating: 9},
            {name: "MS2", rating: 9},
            {name: "HS3", rating: 9}
        ]
    }
}

function desirableNeighborhood(neighborhoodsObject){
    let total = 0;
    for (let i = 0; i < neighborhoodsObject.schools.length; i++) {
        sum += neighborhoodsObject[i].schools.rating;
    }
        return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === 'low' && sum >= 24;
}


///!!!!!!!!!!!!!!!my failed attempt///pull from javier to get full solution!!!!!!!!!!!
//     function desirable(object) {
//         let sum = 0
//         for (let i = 0; i < object.length; i++) {
//             if (object(i).medianHomePrice < 3000 && object(i).crimeRate === 'low' && (sum += object[i].schools.rating)) ;
//         }
//         return desirable(neighborhood1);
//     }
// }


//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

////what's the cost of each level? = level * level * priceOfCan
///need a totalCost accumulator variable and some kind of level variable that keeps tack of what level I'm on
//and I need to keep looping until total cost > bonus
// function beeramid(bonus, price){
//         let totalCost = 0;
//         let levels = 0;
//         while (totalCost < bonus){
//             totalCost += levels * levels * price;
//             if (totalCost + ((levels + 1) ** 2 * price) > bonus){
//         break}
//             levels++;
//         }
//         return levels;
// }

const attendance = {
    miami: 32789,
    buffalo: 45678,
    portland: 24567
}
//Given the attendance object, write a function that returns the total attendance across all teams.
function totalAttendance(attendanceObjects) {
    let attendanceArray = Object.values(attendanceObjects);
    let total = 0;
    for (let i = 0; i < attendanceArray.length; i++) {
        total += attendanceArray[i];
    }
    return total;
}
/////BOTH SOLUTIONS ARE CORRECT::: to see answer put totalAttendance(attendance) in webpage terminal
//
// function totalAttendance(attendanceObject){
//         let total = 0;
// for (const prop in attendance){
//     total += attendance[prop];
// }
//     return total;
// }
//Given the attendance object, write a function that returns the average attendance.

function averageAttendance(attendanceObject){
        let total = 0;
        for (const prop in attendance){
            total += attendance[prop];
        }
        return total/Object.keys(attendance).length;
}

//Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values.

function createObject(attendanceObject){
        let total = 0;
        for (const prop in attendance){
            total += attendance[prop];
        }
        return {
            totalAttendance: total,
            averageAttendance: total/Object.keys(attendance).length
        }
}

/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
 *
 * Examples
 *
 * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
 * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
 * freeShipping({ Monopoly: 11.99, Secret_Game: 35.99, Bananagrams: 13.99 }) ➞ true
 *
 * Notes
 * Ignore tax or additional fees when calculating the total order cost.
 */

freeShippingOne = ({ Shampoo: 5.99, Rubber_Ducks: 15.99 })
freeShippingTwo = ({ Flatscreen_TV: 399.99 })
freeShippingThree = ({ Monopoly: 11.99, Secret_Game: 35.99, Bananagrams: 13.99 })

function freeShipping(value) {
    let price = Object.values(value);
    console.log(price);
    let total = 0
    for (let i = 0; i < price.length; i++) {
        total += price[i]
        return (total);
        // if (total > 50){
        //     return true;
        }
}





/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

let address = '8646 Sunny Oaks';

function convertAddressToObject(addressString) {
//     return {
//         streetNumber: addressString.substring(0, address.indexOf(' ')),
//         streetName: addressString.substring(address.indexOf(' ') + 1)
//     }
//
// }
    //=======above same as below====ABOVE keeps it as a string 0 is starting point address.indexOff(' ') is the end point, streetName does not need end point since it defaults to the end of the string
    //
    // BELOW converts it to an Array

    let addressArray = addressString.split(' ');
    return {
        streetNumber: addressString[0],
        streetName: addressArray.slice(1, addressArray.length).join(' ')
    }
}


/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
  >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
*/
totalPets = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
   ]

//  function totalPets(arrayOfObjects){
//      let total = 0;
//      for (let i = 0; i < arrayOfObjects.length; i++){
//          total += arrayOfObjects[i].pets;
//      }
//      return total;
// }

// function totalPets(arrayOfObjects){
//     let total = 0;
//     arrayOfObjects.forEach(function (object){
//         total += object.pets
//     })
//     return total;
// }

function totalPets(arrayOfObjects){
    return arrayOfObjects.reduce(function (acc, currentValue){
        return acc + currentValue.pets;
    }, 0)
}


/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 *
 *
 */
let numArray = [1, 2, 3, 4, 5];

function minMax(){
    let minMaxArray = [(Math.min(...numArray)), (Math.max(...numArray))]
    return [minMaxArray]
}





/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */
filterArrayOne = [1, 2, "a", "b"]
filterArrayTwo = [1, "a", "b", 0, 15]
filterArrayThree = [1, 2, "aasf", "1", "123", 123]

function filterArray(array) {
    let pullNumArray = array.filter(
        element => typeof element === "number");
    return pullNumArray
}

console.log(filterArray(filterArrayTwo));
