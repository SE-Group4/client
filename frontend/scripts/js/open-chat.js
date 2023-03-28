const sentMessage = document.querySelector(".sent .message__body");
const receivedMessage = document.querySelector(".received .message__body");

const composeMessage = document.querySelector("form");
composeMessage.addEventListener("submit", (event) => {
    event.preventDefault();
    const composeData = Object.fromEntries(
        new FormData(event.target).entries()
    );
    console.log(composeData);
    // append sent message to the sent message div
    composeMessage.reset();
    return false;
});
