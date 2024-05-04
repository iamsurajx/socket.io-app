var app = require('express')();
var http = require('http').Server(app);

const { constants } = require('buffer');
var path = require('path');
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  var options = {
    root: path.join(__dirname)
  }
  var fileName = 'index.html';
  res.sendFile(fileName, options);
})


// root file me hi cjheck karna hota hai
// agar spelling mistake huaa to front end se connect nahi hoga....

io.on('connection', (socket) => {
  console.log('A user connected...')


  // agar disconnect huaa to...
  socket.on('disconnect', () => {
    console.log('A user is disconnected.. ')
  })
})


http.listen(3000, () => {
  console.log('Server ready on 3000');
})