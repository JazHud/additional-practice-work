// Construct for loops that accomplish the following tasks:
//
//     Print the numbers 0 - 20, one number per line.
// for (let i = 0; i <= 20; i++){
//     console.log(i);
// }

//     Print only the ODD values from 3 - 29, one number per line.
//     for (let i = 3; i <= 30; i++) {
//         if (i % 3 === 0) {
//             console.log(i);
//         }
//     }
//     Print the EVEN numbers 12 down to -14 in descending order, one number per line.
// for (let i = 12; i >= -14; i--){
//     if (i % 2 === 0);
//     console.log(i)
// }

//     Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let i = 50; i >= 20; i--){
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:
//     Print each element of the array to a new line.

let codeArray = [1, 5, 'LC101', 'blue', 42];

function arrayStack(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
console.log(codeArray);
arrayStack(codeArray);

// Print each character of the string---in reverse order---to a new line.
const code = "LaunchCode";
/////reverse order????? on a new line????
    for (let i = 0; i < code.length; i++){
        console.log(code[i]);
    }



// Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
//
// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
//     In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.
//     Print the arrays to confirm the results. Print evens first. Example: console.log(evens);

let array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenNums = [];
let oddNums = [];
console.log(array);
    function sortEvenArray(arr){

        for(let i = arr; i < arr.length; i++){
            if(i % 2 === 0){
                console.log(arr[i])
                // evenNums.push(arr[i])
                // console.log(evenNums);
            }

        }

    }


