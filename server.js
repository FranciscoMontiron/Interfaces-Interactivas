const express = require('express');
const fs = require('fs');
const https = require('https');
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

    socket.on('sensorData', (data) => {
        //console.log('Datos del giroscopio:', data);

        if (data.player === 1) {
            io.emit('sensorData', { ...data, player: 1 });
        } else if (data.player === 2) {
            io.emit('sensorData2', { ...data, player: 2 });
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

