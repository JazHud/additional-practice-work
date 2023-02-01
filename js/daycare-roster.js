function addKid(){
const btn = document.getElementById('submit-child-info');

// let guardName = document.getElementById('guardian-name');
// let childName = document.getElementById('childname');
// let phoneNum = document.getElementById('phone-number');

let tableBody = document.getElementById('table-body');
let tdGuard = document.createElement('td');
let tdChild = document.createElement('td');
let tdphone = document.createElement('td');

let tr = document.createElement('tr');

tdGuard.innerHTML = document.getElementById('guardian-name').value;
tdChild.innerHTML = document.getElementById('childname').value;
tdphone.innerHTML = document.getElementById('phone-number').value;

tr.appendChild(tdGuard);
tr.appendChild(tdChild);
tr.appendChild(tdphone);

tableBody.appendChild(tr);
}
// let inputList = document.getElementById('kidlist');

// btn.addEventListener('click', function (){
//     let showkids = guardName.value + " " + childName.value +" " + phoneNum.value + "\n";
//     inputList.append(showkids);
// });

