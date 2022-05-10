const io = require("socket.io")(process.env.PORT,{
    cors: {
        origin: "*"
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