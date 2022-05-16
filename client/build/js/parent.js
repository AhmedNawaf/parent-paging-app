import {io} from "../_snowpack/pkg/socket.io-client.js"
const socket = io("https://parent-paging-app.herokuapp.com/")

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