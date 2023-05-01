const back = document.querySelector(".fa-circle-arrow-left");
const form = document.querySelector("form");

back.addEventListener("click", (event) => {
    event.preventDefault();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    console.log(formData);
    window.location.href = "/src/pages/index.html";
});
