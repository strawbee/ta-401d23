'use strict';

// application dependencies
const net = require('net');
const Client = require('./client');
const commands = require('./commands');
const logger = require('./logger');

// application setup
const server = module.exports = net.createServer();
let clientPool = [];
const PORT = process.env.PORT; // eslint-disable-line

server.on('connection', (socket) => {
  // pass the connecting socket into the Client constructor to assign an ID and nickname
  const client = new Client(socket);
  clientPool.push(client);

  // tells connecting client welcome, and tells everyone connected to server that client has joined
  client.socket.write(`\tWelcome to the chat! Your nickname is ${client.nickname}.\n`);
  clientPool.map(c => c.socket.write(`\t${client.nickname} has joined the chat.\n`));

  // whenever the connecting client transmits data (writes something and presses enter), handle it
  socket.on('data', (data) => {
    const message = data.toString().trim();

    if (message.slice(0, 1) === '@') commands.parse(message, client, clientPool);
    else {
      clientPool.filter(c => c.id !== client.id)
        .map(c => c.socket.write(`${client.nickname}: ${message}\n`));
    }
  });

  // when the user disconnects, take user's socket out of the clientPool and inform connected users
  socket.on('close', () => {
    clientPool = clientPool.filter(c => c.id !== client.id);
    clientPool.map(c => c.socket.write(`\t${client.nickname} has left the channel.\n`));
  });

  // if there is an error, log the error
  socket.on('error', (err) => {
    logger.log(logger.ERROR, err);
  });
})
  .listen(PORT, () => logger.log(logger.INFO, `Listening on port ${PORT}`));
