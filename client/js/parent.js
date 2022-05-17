import {io} from "socket.io-client" // Import the client-side of socket.io
const socket = io("https://parent-paging-app.herokuapp.com/") // create a WebSocket and connect it to the server

// Selectors

const parentCall = document.getElementById("parent-call") // Select the call button
const parentSend = document.getElementById("parent-send") // Select the send notification button
const notificationAlert = document.getElementById("notification-alert"); // Select the notification message
const modalClose = document.getElementById("close"); // Select the close button on the notification button

// Events

parentCall.addEventListener('click', callSent); // Call the function "callSent" when the call button is clicked

parentSend.addEventListener('click', notificationSent); // Call the function "notificationSent" when the send notification button is clicked

modalClose.addEventListener('click', (e) => { //Call a function when the close button on the notification button clicked
    e.preventDefault(); // this a standard for click event
    notificationAlert.classList.remove("show"); // close the notification message
})

// Functions sent to the server

function callSent(e) { // The function thet is being called when the call button is clicked
    e.preventDefault(); // this a standard for click event
    socket.emit("parent-call"); // Send a named function "parent-call" to the server
}

function notificationSent(e) {
    e.preventDefault(); // this a standard for click event
    socket.emit("parent-send"); // Send a named function "parent-send" to the server
}

// Socket Event

socket.on("child-sent", () => { // when the socket receive "child-sent" function from the server, call a function
    notificationAlert.classList.add("show"); //show the notification message
})