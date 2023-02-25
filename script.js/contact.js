const form = document.querySelector("#form");

const firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");

const subject = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const address = document.getElementById("address");
const addressError = document.getElementById("addressError");

const submitButton = document.querySelector(".submitButton");

const validatedMessage = document.querySelector(".validatedMessage");

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }

function validateForm(event) {
    event.preventDefault();

    if(checkLength(firstName.value, 0) ) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if(checkLength(subject.value, 10) ) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(checkLength(address.value, 25 ) ) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if(validateEmail(email.value) ) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm)

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

form.onsubmit =function (event) {
    event.preventDefault();
}

/*submitButton.addEventListener("click", function () {
});

    if(len >= 10) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }*/


/* No need for the viewer to see typed length of characters */
/*subject.onkeydown =function (event) {
    console.log(event.target.value.length);

    const len = event.target.value.length;

    characterCount.innerHTML = len; 

}*/
