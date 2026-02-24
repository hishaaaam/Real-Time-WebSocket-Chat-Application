let socket = null;
let currentUser = "";

function connect() {
    currentUser = document.getElementById("username").value;
    const status = document.getElementById("status");

    if (!currentUser) {
        alert("Enter username");
        return;
    }

    socket = new WebSocket("ws://localhost:8765");

    socket.onopen = () => {
        socket.send(currentUser);
        status.innerText = "Connected";
        status.style.color = "lightgreen";
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        addMessage(`${data.from}: ${data.message}`, "left");
    };

    socket.onerror = () => {
        alert("Connection error");
    };
}

function sendMessage() {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
        alert("Connect first");
        return;
    }

    const receiver = document.getElementById("receiver").value;
    const message = document.getElementById("message").value;

    if (!receiver || !message) return;

    socket.send(JSON.stringify({
        to: receiver,
        message: message
    }));

    addMessage(`You: ${message}`, "right");
    document.getElementById("message").value = "";
}

function addMessage(text, side) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.className = `message ${side}`;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}
