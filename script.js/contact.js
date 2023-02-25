/*function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }*/


const form = document.querySelector("#form");

const firstName = document.getElementById("firstName");

const subject = document.getElementById("subject");

const email = document.getElementById("email");

const address = document.getElementById("address");

const submitButton = document.querySelector(".submitButton");


function validateForm(event,firstName){
    event.preventDefault();

    /*if(firstName.value.trim.length > 0) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }*/

    if(subject.value.trim.length > 10) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(email.value.trim.length > 0) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(address.value.trim.length > 25) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm)

form.onsubmit =function (event) {
    event.preventDefault();
}

submitButton.addEventListener("click", function () {
});

    if(len >= 10) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }


/* No need for the viewer to see typed length of characters */
/*subject.onkeydown =function (event) {
    console.log(event.target.value.length);

    const len = event.target.value.length;

    characterCount.innerHTML = len; 

}*/
