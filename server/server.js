const io = require("socket.io")(3000,{
    cors: {
        origin: ['http://localhost:8080']
    }
})

io.on("connection", socket => {
    socket.on("parent-call", () => {
        socket.broadcast.emit("parent-called")
    })
    socket.on("parent-send", () => {
        socket.broadcast.emit("parent-sent")
    })
    socket.on("child-send", () => {
        socket.broadcast.emit("child-sent")
    })
})