const express = require("express");
// loading the express module on line one
const port = 9090;

const server = express();
// initialise a server

server.get("/", function (request, response) {
  response.status(200).send("You've successfully reached the server");
});
// set up a "/" endpoint
// it should respond with "You've successfully reached the server"
// it should respond with status code 200

const listener = server.listen(port, function () {
  console.log("Your app is listening on port 9090");
});
