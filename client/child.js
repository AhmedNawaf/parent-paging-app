import {io} from "socket.io-client"
const socket = io("http://localhost:3000")

const childSend = document.getElementById("child-send")

childSend.addEventListener('click', notificationSent)


function notificationSent(e) {
    e.preventDefault()
    socket.emit("child-send")
}

socket.on("parent-called",() => {
    window.alert("Call received from parent")
})

socket.on("parent-sent",() => {
    window.alert("I'm out")
})