const back = document.querySelector(".fa-circle-arrow-left");
const form = document.querySelector(".select__value form");
console.log(form);

back.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("return back to sign up page");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(formData);
});
