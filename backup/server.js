const express = require('express');
//const http = require('http');
var fs = require('fs');
var https = require('https');

const socketIo = require('socket.io');

const app = express();
const server = https.createServer({
    cert: fs.readFileSync('server.cer'),
    key: fs.readFileSync('server.key')
}, app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);

    socket.on('movement', (data) => {
        // Manejar los datos de movimiento recibidos del dispositivo
        io.emit('movement', data);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
