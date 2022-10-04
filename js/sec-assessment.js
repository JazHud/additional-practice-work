///test review//

function isNegative(num){
    return num < 0;
}

function isTen(num){
    return num === 10;
}

function double(num){
    return num * 2;
}

///may need return infront of array.filter
function remove9s(array){
     array.filter(number => {
        return number !==9;
    })
}

function average(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total/array.length;
}

///or
// function average(array) {
//     let total = 0;
//     array.forEach(number => {
//         total += number;
//     });
//     return total / array.length;
// }

function countOdds(array) {
    let counter = 0;
    array.forEach(number => {
        if (number % 2 ===1) counter++;
    });
    return counter;
}
// or
// function countOdds(array){
//     return array.filter(num => num % 2 === 1).length
// }

function averageSales(arrayOfObjects){
    let sales = [];
    arrayOfObjects.forEach(object => sales.push(object.sales));
    return average(sales);
}

function convertNameToObject(string){
    return {
        firstName: string.split(' ')[0],
        lastName: string.split(' ')[1]
    }

}

function countVowels(string) {
    let vowelsArray = ["a", "e", "i", "o", "u"];
    let counter = 0;
    [...string].forEach(letter => {
        if (vowelsArray.includes(letter)) counter++
    });
    return counter;
}

function countVowels(string) {
    let vowelsArray = ["a", "e", "i", "o", "u"];
    return [...string].filter(letter => vowelsArray.includes(letter)).length;
}

function analyzeWord(word){
    return {
        word: word,
        numberOfLetters: word.length,
        numberOfVowels: countVowels(word),
    }
}

function capitalizeName(name){
    const firstName = name.split(" ");

    for (let i = 0; i < firstName.length; i++){
        firstName[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return firstName.join(" ");
}

