var socket = io();
socket.on('connect', function () {
    console.log('connection successfull');
});

socket.on('disconnect', function () {
    console.log('lost connection');
});

socket.emit('sendMessage', {
    user: 'Neox',
    msg: 'Hello World'
}, function (resp) {
    console.log('callback triggered', resp);
});

socket.on('sendMessage', function (msg) {
    console.log('Server say:', msg);
});