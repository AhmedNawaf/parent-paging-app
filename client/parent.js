import {io} from "socket.io-client"
const socket = io("http://localhost:3000")

const parentCall = document.getElementById("parent-call")
const parentSend = document.getElementById("parent-send")

parentCall.addEventListener('click', callSent)
parentSend.addEventListener('click', notificationSent)



function callSent(e) {
    e.preventDefault()
    socket.emit("parent-call")
}

function notificationSent(e) {
    e.preventDefault()
    socket.emit("parent-send")
}

socket.on("child-sent", () => {
    window.alert("Hey, The school is over")
})