const back = document.querySelector(".fa-arrow-left");
back.addEventListener("click", () => {
    window.history.back();
});

const media = document.querySelector(".media");
media.addEventListener("click", () => {
    window.location.href = "/src/pages/group-media.html";
});

const links = document.querySelector(".links");
links.addEventListener("click", () => {
    window.location.href = "/src/pages/group-links.html";
});

const files = document.querySelector(".files");
console.log(files);
files.addEventListener("click", () => {
    window.location.href = "/src/pages/group-filesgit .html";
});

document.querySelector(".leave").addEventListener("click", () => {
    document.querySelector(".leave__room").style.display = "flex";
});

document.querySelector(".cancel").addEventListener("click", () => {
    document.querySelector(".leave__room").style.display = "none";
});
