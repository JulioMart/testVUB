//Initialize Users
const users = new Users;
//initialize UI
const ui = new UI;

//Form event validation
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('picture').addEventListener('blur', validatePicture);
document.getElementById('caption');

function validateName(){
    const name = document.querySelector('#name');
    const re = /^[A-Za-z]$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validatePicture(){
        
}

function validateEmail(){
    const email = document.querySelector('#email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

users.createUser();

ui.showPics();
