const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('sendMessage', {
        user: 'Admin',
        msg: 'Welcome to Athenex Studios'
    });

    client.on('disconnect', () => {
        console.log('user disconnected');
    });

    client.on('sendMessage', (msg, callback) => {
        // client.on('sendMessage', (msg) => {
        // console.log(msg);

        client.broadcast.emit('sendMessage', {
            msg
        });
        // if (msg.user) {
        //     callback({
        //         res: 'everything went nice'
        //     });
        // } else {
        //     callback({
        //         res: 'everything went wrong'
        //     });
        // }

    });

});
