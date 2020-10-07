require('dotenv').config();
const express = require('express');
const socketio = require('socket.io');
const http = require('http');// HTTPS://
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const Circle = require('./dbmodels/Circle');
// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

// headers
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//define routes
app.use('/api/circles', require('./routes/api/circles'));

//serve statisc assets
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Mongoose connection
const db = mongoose.connection;

//mongoose connect
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Check connection
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', function (err) {
  console.error(err);
});

//watch changes in db
const changeStream = Circle.watch();
changeStream.on('change', (change) => {
  // console.log(change);
  const { operationType } = change;
  if (operationType === 'update') {
    return io.emit('changeState');
  }

  if (operationType === 'insert') {
    return io.emit('addItem');
  }
  if (operationType === 'delete') {
    return io.emit('deleteItem');
  }
});

//run io when client connects
io.on('connection', (socket) => {
  // console.log('new WS connection...');
});

//app listen
server.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}`);
});
