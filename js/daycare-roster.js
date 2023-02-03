function addKid(){

let tableBody = document.getElementById('table-body');
let tdGuard = document.createElement('td');
let tdChild = document.createElement('td');
let tdphone = document.createElement('td');
let tr = document.createElement('tr');

tdGuard.innerHTML = document.getElementById('guardian-name').value;
tdChild.innerHTML = document.getElementById('child-name').value;
tdphone.innerHTML = document.getElementById('phone-number').value;

tr.appendChild(tdGuard);
tr.appendChild(tdChild);
tr.appendChild(tdphone);

tableBody.appendChild(tr);

    let newKid = {
        name: document.getElementById('child-name').value,
        guardian: document.getElementById('guardian-name').value,
        phoneNum: document.getElementById('phone-number').value
    };

    console.log(newKid);
}

const btn = document.getElementById('submit-child-info');
btn.addEventListener('click', addKid);


