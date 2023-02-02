function addKid(){


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

const btn = document.getElementById('submit-child-info');

////making the child's information into an object
// let childName = document.getElementById('childname').value;
// let childGuard = document.getElementById('guardian-name').value;
// let childNum = document.getElementById('phone-number').value;



// let inputList = document.getElementById('kidlist');

btn.addEventListener('click', function (){
    let listOfKids = []
    let newKid = {
        name: document.getElementById('childname').value,
        guardian: document.getElementById('guardian-name').value,
        phoneNum: document.getElementById('phone-number').value
    };
    listOfKids.push(newKid);
    console.log(newKid);
    console.log(listOfKids);
    // inputList.append(showkids);
});

