const btn = document.getElementById("btn");
const form = document.getElementById("form");
const email = document.getElementById("email");
const alert = document.getElementById("alert");
const error = document.getElementById("error");
const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function sendEmail() {
    if (!email.value.match(pattern)) {
        form.classList.add("active");
        alert.classList.add("active");
        error.classList.add("active");
    } else {
        alert.classList.remove("active");
        error.classList.remove("active");
        console.log(5);
    }
}

btn.addEventListener('click', sendEmail, false);