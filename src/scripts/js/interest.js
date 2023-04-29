const back = document.querySelector(".fa-circle-arrow-left");
const form = document.querySelector("form");
console.log(form);
console.log("heloo world");

back.addEventListener("click", (event) => {
    event.preventDefault();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(formData);
});
