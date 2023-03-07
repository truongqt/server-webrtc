const path = require("path");
const {createServer} = require("http");

const express = require("express");
const {getIO, initIO} = require("./socket");

const app = express();

app.use("/", express.static(path.join(__dirname, "static")));

const httpServer = createServer(app);

let port = process.env.PORT || 3500;

app.get("/", (req, res) => {
  res.send("This is index");
});

app.get("/test", (req, res) => {
  res.send("TEST ...");
});

initIO(httpServer);

httpServer.listen(port);
console.log("Server started on ", port);

getIO();
