// query selectors
const toggleMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu__user");
const inputSearch = document.querySelector("form");
const joined = document.querySelectorAll(".form");
const joinedShow = document.querySelectorAll(".join p");
const join__form = document.querySelector(".join__form");

// fetch data
const getData = fetch("http://localhost:8080/api/v1/room/rooms");

// show home/profile menu
toggleMenu.addEventListener("click", (event) => {
    menu.classList.toggle("menu__user__show");
});

// search for study rooms
inputSearch.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target).entries());
    function getResponse() {
        return new Promise((resolve, reject) => {
            getData
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    resolve(data.value);
                })
                .catch((error) => {
                    return `Error loading file: ${error}`;
                });
        });
    }
    getResponse().then((contents) => {
        contents.forEach((content) => {
            const dataLowerCase = data["search"].toLowerCase();
            const contentLowerCase = content["roomName"].toLowerCase();
            if (dataLowerCase == contentLowerCase) return "found";
            return "search not found";
        });
    });
    inputSearch.reset();
    return false;
});

// join a room and show if user has joined a room
joined.forEach((join) => {
    join.addEventListener("click", (event) => {
        event.preventDefault();
        event.target.parentElement.style.display = "none";
        let joinedParagraph;
        for (let paragraph in joinedShow) {
            let promptParagraph = event.currentTarget.nextSibling.nextSibling;
            if (promptParagraph == joinedShow[paragraph]) {
                promptParagraph.style.visibility = "visible";
                let interestData = event.currentTarget;
            }
            joinedParagraph = event.currentTarget;
        }

    });
});


