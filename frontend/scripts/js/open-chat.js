const sentMessage = document.querySelector(".sent .message__body");
const receivedMessage = document.querySelector(".received .message__body");

const composeMessage = document.querySelector("form");
const roomName = 'Photography Fanatics';

// handle websocket connection
const chatSocket = new WebSocket(
    'ws://' + window.location.host + '/ws/chat/' + roomName + '/'
)

chatSocket.onmessage = (event) => {
    let data = JSON.parse(event.data);
    let message = data['message']
    sentMessage.value += message;
}

chatSocket.onclose = (event) => {
    console.error('Chat socket closed unexpectedly');
}

composeMessage.addEventListener("submit", (event) => {
    event.preventDefault();
    const composeData = Object.fromEntries(
        new FormData(event.target).entries()
    );
    chatSocket.send(JSON.stringify({
        'message': composeData['message']
    }))
    composeMessage.reset();
    return false;
});
