let submitBtn = document.getElementById('submit-child-info');
submitBtn.addEventListener("click", addKid);

let children = [];

function addKid() {

    getData();

    children.push({
        id: Date.now().toString(),
        name: document.getElementById('child-name').value,
        guardian: document.getElementById('guardian-name').value,
        phoneNum: document.getElementById('phone-number').value
    });

    localStorage.setItem('Roster', JSON.stringify(children));
}

function getData(){
    let dataString = localStorage.getItem('Roster');
    if (dataString != null)
        children = JSON.parse(dataString);
}

// to input the tables via loop
function rosterUpdate() {

    let childrenUpdate = [];
    childrenUpdate = JSON.parse(localStorage.getItem('Roster'));

    let tblBody = document.getElementById('childrenRoster');

    for(i = 0; i < childrenUpdate.length; i++){
        let newRow = tblBody.insertRow();
        let idRow = newRow.insertCell();
        let childRow = newRow.insertCell();
        let gurdRow = newRow.insertCell();
        let phoneRow = newRow.insertCell();

        idRow.innerHTML = childrenUpdate[i].id;
        childRow.innerHTML = childrenUpdate[i].name;
        gurdRow.innerHTML = childrenUpdate[i].guardian;
        phoneRow.innerHTML = childrenUpdate[i].phoneNum;
    }

};

rosterUpdate();

    // let tableBody = document.getElementById('table-body');
    // let tdGuard = document.createElement('td');
    // let tdChild = document.createElement('td');
    // let tdphone = document.createElement('td');
    // let tr = document.createElement('tr');
    //
    // tdGuard.innerHTML = document.getElementById('guardian-name').value;
    // tdChild.innerHTML = document.getElementById('child-name').value;
    // tdphone.innerHTML = document.getElementById('phone-number').value;
    //
    // tr.appendChild(tdGuard);
    // tr.appendChild(tdChild);
    // tr.appendChild(tdphone);
    //
    // tableBody.appendChild(tr);




const btn = document.getElementById('submit-child-info');
btn.addEventListener('click', addKid);

// let children = [];
//
// const addChild = (e) =>{
//     e.preventDefault();
//     let childInfo = {
//         id: Date.now(),
//         child: document.getElementById('child-name').value,
//         guardian: document.getElementById('guardian-name').value,
//         phone: document.getElementById('phone-number').value
//     }
//     children.push(childInfo);
//     document.forms[0].reset();
//
//     console.warn('added' , {children});
//     let display = document.getElementById('kidlist');
//     display.textContent =  JSON.stringify(children);
// }
//
// document.getElementById('submit-child-info').addEventListener('click', addChild);
//
//
// let btn = document.getElementById('submit-child-info');
//
// localStorage.setItem('childrenData', children);
