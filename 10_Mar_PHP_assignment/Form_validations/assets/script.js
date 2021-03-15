"use strict";

window.addEventListener("load", function () {
    var form = document.getElementsByTagName("form")[0];
    // check if the form is submitted
    form.addEventListener("submit", function (event) {
        // vallidate the form
        validateForm(event);
    });
});

// - Name (textfield)
// - Date of Birth (datepicker)
// - Gender (radio buttons)
// - Email Address (email)
// - Contact Number (number)
// - Skills (checkbox)
// - Profile Photo (file)
// - About (textarea)
// - Address (textarea)
// - Educational Qualification (single selection dropdown)
// - Interests Area (multi selection dropdown)
// - Professional Links (textfield)

function validateName(name) {
    if (name.value.length === 0) return 0;
    else if (name.value.length <= 6) return -1;
    return 1;
}

// - Date of Birth (datepicker)
// - Gender (radio buttons)
// - Email Address (email)
// - Contact Number (number)
// - Skills (checkbox)
// - Profile Photo (file)
// - About (textarea)
// - Address (textarea)
// - Educational Qualification (single selection dropdown)
// - Interests Area (multi selection dropdown)
// - Professional Links (textfield)

function validateDob(dob) {
    console.log("date is  = " + dob.value);
    console.log("today date is  = " + Date());
    console.log(
        "date = " + dob.valueAsNumber + " today date = " + Date().valueAsNumber
    );

    if (dob.valueAsDate === null || dob.valueAsDate === undefined) {
        console.log("date is null");
        return 0;
    }
    //else if (dob.valueAsDate > ) return -1;
    return 1;
}

function validateAgree(agree) {
    if (agree.checked === false) return 0;
    return 1;
}

// this function handles form validation
function validateForm(event) {
    var name = document.getElementById("name");
    var dob = document.getElementById("dob");
    var gender = document.getElementById("gender");
    var email = document.getElementById("email");
    var contact = document.getElementById("contact");
    var skills = document.getElementById("skills");
    var profile = document.getElementById("profile");
    var about = document.getElementById("about");
    var address = document.getElementById("address");
    var education = document.getElementById("education");
    var interests = document.getElementById("interests");
    var links = document.getElementById("links");
    var agree = document.getElementById("iagree");

    var nameValid = document.getElementById("name-valid");
    var nameInvalid = document.getElementById("name-invalid");
    var dobValid = document.getElementById("dob-valid");
    var dobInvalid = document.getElementById("dob-invalid");
    var genderValid = document.getElementById("gender-valid");
    var genderInvalid = document.getElementById("gender-invalid");
    var emailValid = document.getElementById("email-valid");
    var emailInvalid = document.getElementById("email-invalid");
    var contactValid = document.getElementById("contact-valid");
    var contactInvalid = document.getElementById("contact-invalid");
    var skillsValid = document.getElementById("skills-valid");
    var skillsInvalid = document.getElementById("skills-invalid");
    var profileValid = document.getElementById("profile-valid");
    var profileInvalid = document.getElementById("profile-invalid");
    var aboutValid = document.getElementById("about-valid");
    var aboutInvalid = document.getElementById("about-invalid");
    var addressValid = document.getElementById("address-valid");
    var addressInvalid = document.getElementById("address-invalid");
    var educationValid = document.getElementById("education-valid");
    var educationInvalid = document.getElementById("education-invalid");
    var interestsValid = document.getElementById("interests-valid");
    var interestsInvalid = document.getElementById("interests-invalid");
    var linksValid = document.getElementById("links-valid");
    var linksInvalid = document.getElementById("links-invalid");
    var agreeValid = document.getElementById("agree-valid");
    var agreeInvalid = document.getElementById("agree-invalid");

    let validname = validateName(name);
    let validdob = validateDob(dob);
    // let validgender = validateGender(gender);
    // let validemail = validateEmail(email);
    // let validcontact = validateContact(contact);
    // let validskills = validateSkills(skills);
    // let validprofile = validateProfile(profile);
    // let validabout = validateAbout(about);
    // let validaddress = validateAddress(address);
    // let valideducation = validateEducation(education);
    // let validinterests = validateInterests(interests);
    // let validlinks = validateLinks(links);
    let validagree = validateAgree(agree);

    // name validation
    if (validname === 1) {
        nameInvalid.classList.remove("d-block");
        nameValid.classList.add("d-block");
    } else {
        event.preventDefault();
        event.stopPropagation();
        nameValid.classList.remove("d-block");
        if (validname === -1)
            nameInvalid.innerText = "Username must be more than 6 characters";
        nameInvalid.classList.add("d-block");
    }

    // agree validation
    if (validname !== 1 || validpass !== 1 || validcpass !== 1) {
        event.preventDefault();
        event.stopPropagation();
        agreeValid.classList.remove("d-block");
        agreeInvalid.innerText = "Please fill all the above fields correctly";
        agreeInvalid.classList.add("d-block");
    } else if (validagree === 1) {
        agreeInvalid.classList.remove("d-block");
        agreeValid.classList.add("d-block");
    } else {
        event.preventDefault();
        event.stopPropagation();
        agreeValid.classList.remove("d-block");
        agreeInvalid.classList.add("d-block");
    }
}
