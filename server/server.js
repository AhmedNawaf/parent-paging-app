const io = require("socket.io")(process.env.PORT,{ // create a socket.io server and the port is an environment variable
    cors: { 
        origin: "*"  //CORS is blocking the request sent from the client so we want to disable CORS
    }
})

io.on("connection", socket => { // when the client is connecting to the server do what's inside the event block

    socket.on("parent-call", () => { // When the server receive the function "parent-call", call a function.
        socket.broadcast.emit("parent-called"); // send "parent-called" function to the client
    })

    socket.on("parent-send", () => { // When the server receive the function "parent-send", call a function.
        socket.broadcast.emit("parent-sent"); // send "parent-sent" function to the client
    })

    socket.on("child-send", () => { // When the server receive the function "child-send", call a function.
        socket.broadcast.emit("child-sent"); // send "child-sent" function to the client
    })
})