'use strict';

window.addEventListener('load', function () {
    var form = document.getElementsByTagName('form')[0];
    // check if the form is submitted
    form.addEventListener('submit', function () {
        // vallidate the form
        validateForm();
    });
});

function validateUserName(uname) {
    if (uname.value.length == 0)
        return 0;
    else if (uname.value.length <= 6)
        return -1;
    return 1;
}

function validatePassword(pass) {
    // Regex for password validation
    let passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (pass.value.length == 0)
        return 0;
    else if(pass.value.length < 8 || passRegex.test(pass.value) === false)
        return -1;
    return 1;
}

function validateCPassword(cpass, pass) {
    if (cpass.value.length == 0)
        return 0;
    else if (cpass.value !== pass.value)
        return -1;
    return 1;
}

function validateAgree(agree) {
    if (agree.checked === false)
        return 0;
    return 1;
}

// this function handles form validation
function validateForm() {
    var username = document.getElementById('uname');
    var password = document.getElementById('pass');
    var confirmPass = document.getElementById('confirm-pass');
    var agree = document.getElementById('iagree');

    var unameValid = document.getElementById('uname-valid');
    var unameInvalid = document.getElementById('uname-invalid');
    var passValid = document.getElementById('pass-valid');
    var passInvalid = document.getElementById('pass-invalid');
    var cpassValid = document.getElementById('cpass-valid');
    var cpassInvalid = document.getElementById('cpass-invalid');
    var agreeValid = document.getElementById('agree-valid');
    var agreeInvalid = document.getElementById('agree-invalid');

    let validuname = validateUserName(username);
    let validpass = validatePassword(password);
    let validcpass = validateCPassword(confirmPass, password);
    let validagree = validateAgree(agree);

    // username validation
    if (validuname == 1) {
        unameInvalid.classList.remove('d-block');
        unameValid.classList.add('d-block');
    }
    else {
        event.preventDefault();
        event.stopPropagation();
        unameValid.classList.remove('d-block');
        if (validuname == -1)
            unameInvalid.innerText = 'Username must be more than 6 characters';
        unameInvalid.classList.add('d-block');
    }


    // password validation
    if (validpass == 1) {
        passInvalid.classList.remove('d-block');
        passValid.classList.add('d-block');
    }
    else {
        event.preventDefault();
        event.stopPropagation();
        passValid.classList.remove('d-block');
        if (validpass == -1)
            passInvalid.innerText = 'Password must be more than or equal to 8 characters.\nIt must contain atleast 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.';
        passInvalid.classList.add('d-block');
    }


    // cpassword validation
    if (validcpass == 1) {
        cpassInvalid.classList.remove('d-block');
        cpassValid.classList.add('d-block');
    }
    else {
        event.preventDefault();
        event.stopPropagation();
        cpassValid.classList.remove('d-block');
        if (validcpass == -1)
            cpassInvalid.innerText = 'Password and Confirm password fields must be same';
        cpassInvalid.classList.add('d-block');
    }

    // agree validation
    if (validagree == 1) {
        agreeInvalid.classList.remove('d-block');
        agreeValid.classList.add('d-block');
    }
    else {
        event.preventDefault();
        event.stopPropagation();
        agreeValid.classList.remove('d-block');
        agreeInvalid.classList.add('d-block');
    }
}