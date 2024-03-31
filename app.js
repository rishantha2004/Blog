require('dotenv').config();
const express = require("express");
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 500 || process.env.PORT;
const expressLayout = require('express-ejs-layouts');
const ejs = require('ejs');


const connectDB = require('./server/config/db');
const text = require('./server/models/Post.js');
app.use(express.static('public'));
app.use(expressLayout);
app.set('layout', "./layouts/main");
app.set('view engine', 'ejs');


connectDB();

app.use("/", require("./server/routes/main.js"));
app.use("/", require("./server/routes/admin"));

// app.use('/chat', require("./server/routes/serverChat.js"));

app.get('/chat', function(req, res) {
    // res.sendFile(__dirname + '/public/chat.html');
    res.render('chat.ejs');
 });
 





server.listen(PORT, () => {console.log("Server is up!")});