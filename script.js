document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault();

    let errors = {};
    let form = event.target;

    // description
    let description = document.getElementById('Description').value;
    let spanDescription = document.getElementById('error_description');

    if ( description.length > 100) {
        errors. description = 'Description can not be more than 100 characters';
        spanDescription.classList.add('invalid');
    }
    if(description == ''){
        errors. description = 'Description can not be empty';
        spanDescription.classList.add('invalid');
    }

// radio
    let age = false;
    let spanAge = document.getElementById('error_age');

    form.querySelectorAll('[name = "age"]').forEach(element => {
        if (element.checked) {
            age  = true;
        }
    });

    if (!age) {
        errors.age = 'Please select your age';
        spanAge.classList.add('invalid');
    }
// password
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    let spanPassword = document.getElementById('error_password');
    let spanPassword2 = document.getElementById('error_password2');


    // if(password == ' '){
    //     errors.password = 'Password can not be empty';   
    //     spanPassword.classList.add('invalid');     
    // }
    
    // if(password2 == ' '){
    //     errors.password2 = 'Please repeat your password';  
    //     spanPassword2.classList.add('invalid');      
    // }else if (password != password2) {
    //     errors.password = 'Passwords do not match';
    //     spanPassword.classList.add('invalid');
    // }
    if (password == '') {
        errors.password = 'Password can not be empty';
        spanPassword.classList.add('invalid'); 

    }
    if (password2 == '') {
        errors.password2 = 'Repeat your password';
        spanPassword2.classList.add('invalid'); 
    }else if (password != password2) {
        errors.password2 = 'Passwords do not match';
        spanPassword2.classList.add('invalid'); 
    }

// checkbox
    let agree = document.getElementById('checkagree').checked;
    let spanAgree = document.getElementById('error_agree');

    if (!agree) {
        errors.agree = 'You must agree our terms and conditions';
        spanAgree.classList.add('invalid');
    }

    form.querySelectorAll('.error-text').forEach(item => {
        item.innerHTML = '';
    });


    for (let item in errors) {
        let errorSpan = document.getElementById('error_' + item);

        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }


    if (Object.keys(errors).length == 0) {
        form.submit();
    }
})
// // show hide password
let passwordShow = document.getElementById('password');
let toggleIconEye = document.getElementById('toggleIcon');

showHidePassword = () => {
    if (passwordShow.type == "password") {
        passwordShow.setAttribute('type', 'text');
        toggleIconEye.classList.add('fa-eye-slash');
    } else {
        toggleIconEye.classList.remove('fa-eye-slash');
        passwordShow.setAttribute('type', 'password');
    }
}
toggleIconEye.addEventListener('click', showHidePassword);

let passwordShow2 = document.getElementById('password2');
let toggleIconEye2 = document.getElementById('toggleIcon2');

showHidePassword2 = () => {
    if (passwordShow2.type == "password") {
        passwordShow2.setAttribute('type', 'text');
        toggleIconEye2.classList.add('fa-eye-slash');
    } else {
        toggleIconEye2.classList.remove('fa-eye-slash');
        passwordShow2.setAttribute('type', 'password');
    }
}
toggleIconEye2.addEventListener('click', showHidePassword2);





 // username
function validation() {

    let username = document.querySelector('[name = "username"]').value;
    let spanUsername = document.getElementById('error_username');

    if (username.length < 4) {
        spanUsername.innerHTML = 'Username must be more than 4 characters';
        spanUsername.classList.add('invalid');
    }
    else if( username == ''){
        spanUsername.innerHTML = 'Username can not be empty characters';
        spanUsername.classList.add('invalid');
    }
    else{
        spanUsername.innerHTML = 'Username is valid';
        spanUsername.classList.add('valid');
    }

   
}

function emailValidation() {
    let email = document.querySelector('[name = "email"]').value;
    let spanEmail = document.getElementById('error_email');
    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(emailStructure)) {
        spanEmail.innerText = "Your email is valid";
        spanEmail.classList.add('valid');
    }
    else{
        spanEmail.innerText = "Your email is invalid";
        spanEmail.classList.add('invalid');       
    }

}