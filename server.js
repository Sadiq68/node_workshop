// import built-in Node packages
var http = require('http');
var express = require('express'); // import express
var server = express();

var port = 4000;

// set the view engine to ejs
server.set('view engine', 'ejs');

server.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
 });

server.get("/json", function(req, res) {
    res.send((JSON.stringify({ name: "Lenny" })));
});

// template pages

server.get("/about", function(req, res) {
    res.render('about');
 });

 server.get("/info", function(req, res) {
    res.render('info', { message: 'Hello world' });
 });

server.listen(port, function () { // Callback function
    console.log(`Server listening at ${port}`);
});
