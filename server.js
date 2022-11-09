const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client/public'));
app.set('views', __dirname + '/client/public/views');
app.set('view engine', 'ejs')

let counter = 0;

app.get('/', function(req, resp) {
    resp.render('index');
})

let server = app.listen(8000, function() {
    console.log('listening on 8000');
})

const io = require('socket.io')(server);

io.on('connection', function(socket) {

    socket.emit('epic_counter', counter);

    socket.on('push_epic_button', function(data) {
        socket.emit('epic_counter', ++counter);
    });

    socket.on('reset_counter', function(data) {
        counter = 0;
        socket.emit('epic_counter', counter);
    });

});