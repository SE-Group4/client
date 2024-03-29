const form = document.querySelector("form");
// const eye = document.querySelectorAll('.fa-eye')
// const password = document.querySelector('#password')
// const confirmPassword = document.querySelector('#confirm__password');

// confirm password input
const confirmPasswordInput = (firstValue, lastValue) => {
    if (firstValue == lastValue) return true;
    return false;
};

// get signup info data from user
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    let firstName = formData.first_name;
    let lastName = formData.last_name;
    let email = formData.email;
    let passwordData = formData.password;
    let confirmData = formData.confirm__password;
    console.log(formData);
    try {
        if (
            firstName != "" &&
            lastName != "" &&
            confirmPasswordInput(passwordData, confirmData) &&
            emailValidate(email)
        ) {
            window.location.href = "/src/pages/interests.html";
        }
    } catch (error) {
        return error;
    }
    form.reset();
    return false;
});

// validate email
function emailValidate(email) {
    let regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

// show password
eye.forEach((eyecon) => {
    eyecon.addEventListener("click", (e) => {
        if (e.target.parentElement.classList == "password") {
            password.type == "password"
                ? (password.type = "text")
                : (password.type = "password");
        }
        if (e.target.parentElement.classList == "confirm__password") {
            confirmPassword.type == "password"
                ? (confirmPassword.type = "text")
                : (confirmPassword.type = "password");
        }
    });
});
