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
function beeramid(bonus, price){
        let totalCost = 0;
        let levels = 0;
        while (totalCost < bonus){
            totalCost += levels * levels * price;
            if (totalCost + ((levels + 1) ** 2 * price) > bonus){
        break}
            levels++;
        }
        return levels;
}





