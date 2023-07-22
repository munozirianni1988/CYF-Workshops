const express = require('express');
// loading the express module on line one
console.log("Log 1: ", typeof app);


const server = express();
// initialise a server
console.log("Log 2: ", typeof server);



server.get("/",function() {
    response.status(201).send("");
});
// set up a "/" endpoint
// it should respond with "You've successfully reached the server"
// it should respond with status code 200