const back = document.querySelector(".fa-arrow-left");
back.addEventListener("click", () => {
    window.history.back();
});

/** show group profile addedmedia when button is click */
const media = document.querySelector(".media");
media.addEventListener("click", () => {
    window.location.href = "/src/pages/group-media.html";
});

/** show group profile added links when button is click */
const links = document.querySelector(".links");
links.addEventListener("click", () => {
    window.location.href = "/src/pages/group-links.html";
});

/** show group profile added files when button is click */
const files = document.querySelector(".files");
console.log(files);
files.addEventListener("click", () => {
    window.location.href = "/src/pages/group-filesgit .html";
});

/** display leave group pop-up option page with the leave ubtton is clicked  */
document.querySelector(".leave").addEventListener("click", () => {
    document.querySelector(".leave__room").style.display = "flex";
});

/** cancel `leave room` when button is clicked */
document.querySelector(".cancel").addEventListener("click", () => {
    document.querySelector(".leave__room").style.display = "none";
});
