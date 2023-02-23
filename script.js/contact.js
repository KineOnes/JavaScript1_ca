const name = document.querySelector("name");

const subject = document.querySelector("subject");

const email = document.querySelector("email");

const address = document.querySelector("address");

const submitButton = document.querySelector("submitButton");

subject.onkeydown =function (event) {
    console.log(event.target.value.length);

    const len = event.target.value.length;

    characterCount.innerHTML = len;

    if(len >= 10) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}