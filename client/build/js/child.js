import {io} from "../_snowpack/pkg/socket.io-client.js" // mport the client-side of socket.io
const socket = io("https://parent-paging-app.herokuapp.com/"); // create a WebSocket and connect it to the server

// Selectors

const childSend = document.getElementById("child-send"); // Select the send component
const callCard = document.getElementById("call-card"); // Select the call component
const phoneCallSound = new Audio("../sounds/phone-call.mp3"); // Create audio object with a selected pre-recorded sound
const callCardBtns = document.querySelectorAll(".fa-phone"); // Select the call buttons of call component

// Events

childSend.addEventListener('click', notificationSent); // Event for when the child clicks on the send button


function notificationSent(e) { // The function get called when the event is occured
    e.preventDefault(); // this a standard for click event
    socket.emit("child-send"); // the socket sends a named function to the server in order to listen for it
}

// Socket Events

socket.on("parent-called",() => { // when the socket receive a named function from the server make a function for it
    callCard.classList.add("call-card-called"); // CSS class added to show the call card
    phoneCallSound.play(); // pre-recorded sound played
    phoneCallSound.addEventListener("ended", () => { // event for when the sound has ended
        callCard.classList.remove("call-card-called"); // It removes the CSS class to remove tha call component
    })
})

socket.on("parent-sent",() => {
    window.alert("I'm out");
})


callCardBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        callCard.classList.remove("call-card-called");
        phoneCallSound.pause();
        phoneCallSound.currentTime = 0;
    })
})