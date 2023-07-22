const express = require('express');
// loading the express module on line one



const server = express();
// initialise a server




server.get("/",function() {
    response.status(201).send("");
});
// set up a "/" endpoint
// it should respond with "You've successfully reached the server"
// it should respond with status code 200