const sentMessage = document.querySelector(".chat__message");
const receivedMessage = document.querySelector(".received .message__body");

const received = document.querySelector(".received");
const metadata = document.createElement("div");

const composeMessage = document.querySelector("form");
const groupInfo = document.querySelector(".chatname");

const date = new Date();

const sent = document.createElement("div");
sent.classList.add("message");
sent.classList.add("sent");
metadata.classList.add("metadata");

const chatMessage = document.querySelector(".chat__message");

// show group profile
groupInfo.addEventListener("click", (e) => {
    window.location.href = "/src/pages/group-profile.html";
});

const back = document.querySelector(".fa-arrow-left");
back.addEventListener("click", () => {
    window.history.back();
});

const submission = composeMessage.addEventListener(
    "submit",
    (event, ipAddress, message) => {
        event.preventDefault();

        const composeData = Object.fromEntries(
            new FormData(event.target).entries()
        );
        console.log(composeData);
        const messages = `
        <div class="message__body">
            <p>${composeData["message"]}</p>
        </div>
        <div class="metadata">
            <span class="time">${date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}</span >
        </div>
    `;

        sent.innerHTML = messages;
        // save to local storage
        localStorage.setItem("message", messages);
        const data = localStorage.getItem("message");
        sentMessage.appendChild(data);

        // save to local storage
        localStorage.setItem("message", sent);

        composeMessage.reset();
        return composeData;
    }
);
