const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");

app.use(cors());

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173", // url aceita pelo cors
    methods: ["GET", "POST"], // Métodos aceitos pela url
  },
});

io.on("connection", (socket) => {
  console.log(`User connected. ID: ${socket.id} `);

  socket.emit("hello", "Hello there! Welcome to socketIO practicing!");

  socket.on("sendMessage", (message) => {
    io.emit("serverMessage", message);
  });
});

http.listen(3000, () => console.log("Server running on port 3000"));
