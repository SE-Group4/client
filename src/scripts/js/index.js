// query selectors
const toggleMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu__user");
const inputSearch = document.querySelector("form");
const joined = document.querySelectorAll(".form");
const joinedShow = document.querySelectorAll(".join p");
const join__form = document.querySelector(".join__form");

const room = document.querySelector(".user__interests");

// show home/profile menu
toggleMenu.addEventListener("click", (event) => {
    menu.classList.toggle("menu__user__show");

    const rooms = document.querySelector(".chat__rooms");
    const profile = document.querySelector(".profile");
    const message = document.querySelector(".messages");

    profile.addEventListener("click", () => {
        window.location.href = "/src/pages/user-profile.html";
    });
});

window.addEventListener('load', () => {
    const getRooms = async (url) => {
        try {
            const response = await axios.get(url);
        } catch (error) {
            return error;
        }
    };
    getRooms("http://127.0.0.1:8000/api/v1/room/rooms");
})


// search for study rooms
inputSearch.addEventListener("submit", (event) => {
    event.preventDefault();
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
let promptParagraph;
joined.forEach((join) => {
    join.addEventListener("click", (event) => {
        event.preventDefault();
        event.target.parentElement.style.display = "none";

        for (let paragraph in joinedShow) {
            promptParagraph = event.currentTarget.nextSibling.nextSibling;
            if (promptParagraph == joinedShow[paragraph]) {
                promptParagraph.style.visibility = "visible";
                console.log(promptParagraph);
                let interestData = event.currentTarget;
            }
            joinedParagraph = event.currentTarget;
        }
    });
});

// open chat room
room.addEventListener("click", () => {
    if (promptParagraph == undefined) {
        return 'you have to join a room before you can view chats and send messages'
    } else {
        window.location.href = "open-chat.html";
    }
});
