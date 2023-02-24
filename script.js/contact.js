const name = document.getElementById("name");

const subject = document.getElementById("subject");

const email = document.getElementById("email");

const address = document.getElementById("address");

const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("click", function () {
    console.log("I'm a button");
});

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