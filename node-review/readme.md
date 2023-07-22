# Node workshop

In this workshop, we'll build up a NodeJS app from the ground up and check our understanding as we go along.

Remember to preview the `README` first.

## Level 300

Welcome to Node Workshop Level 300.

## Questions

Q1) Define an **API**
A group of functions and procedures that applications use to access data of an operating system, application, or other service.

Q2) What is the purpose of an **API**

It allows 2 applications to "talk" to each other, sharing and storing data.

Q3) Define an **endpoint**

A specific location within an API that accepts requests and sends back response.

If you're unsure about the questions above, then try starting a discussion with another pair.

## Requirements

We need to set up a **single endpoint**.

For this endpoint, a client application should be able to make a GET request to the "/" endpoint at localhost:9090
and the server should respond with a message "You've successfully reached the server"

Firstly,

Q4) Look inside `app.js`.

On line 12, we need to pass some arguments ( inputs ) to the `server.get` method.
What type of inputs should we pass to the `server.get` method? Use the express documentation to check your answer.

{YOUR_ANSWER_HERE}
We have to pass an endpoint, and a function with a request and response parameters
