
const btn = document.getElementById('submit-child-info');

let guardName = document.getElementById('guardian-name');
let childName = document.getElementById('childname');
let phoneNum = document.getElementById('phone-number');



let inputList = document.getElementById('kidlist');

// function showlist(){
//     let showkids = guardName.value + " " + childName.value +" " + phoneNum.value;
//     console.log(showkids);
//
//     inputList.append = showkids;
//
// }
//
// console.log(showlist());
// btn.addEventListener('click', showlist);

//to loop through kiddos
// allKids.forEach(childName =>
//     console.log(childName));

btn.addEventListener('click', function (){
    let showkids = guardName.value + " " + childName.value +" " + phoneNum.value + "\n";
    inputList.append(showkids);
})