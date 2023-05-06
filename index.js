const http = require("http");
const {PORT} = require("./config.js")

const server = http.createServer();

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Se ha conectado un cliente");

  socket.broadcast.emit("chatMessage", {
    user: "info",
    message: "Se ha conectado un nuevo usuario",
  });

  socket.on("chatMessage", (data) => {
      io.emit("chatMessage", data);
  });
});

server.listen(PORT);
