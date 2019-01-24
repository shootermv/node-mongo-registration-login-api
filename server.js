require('rootpath')();
const express = require('express');
const app = express();
const socketIo = require('socket.io')
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
let io = null;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());
app.use((req, res, next) => {  
    res.io = io;
    next();
});
// api routes
app.use('/users', require('./users/users.controller'));
app.use('/tasks', require('./tasks/tasks.controller'));



// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

io = socketIo(server);

io.on("connection", socket => {
  console.log("New client connected"), 
  setInterval(
    () => {},//console.log("something happens..."),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});