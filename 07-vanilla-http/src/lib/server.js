'use strict';

const http = require('http');
const cowsay = require('cowsay');
const bodyParser = require('./body-parser');
const logger = require('./logger');

const app = http.createServer((req, res) => {
  bodyParser(req)
    .then((request) => {
      let cowType = 'default';
      
      if (request.method === 'GET') {
        if (request.url.query.cow) cowType = request.url.query.cow;
          
        // get request to default path
        if (request.url.pathname === '/') {
          res.writeHead(200, { 'Content-type': 'text/plain' });
          res.write(cowsay.say({ text: 'Hello from my server!', f: `${cowType}` }));
          res.end();
          return;
        }
        
        // get request to /cowsay
        if (request.url.pathname === '/cowsay') {
          if (request.url.query.text) {
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.write(cowsay.say({ text: request.url.query.text, f: `${cowType}` }));
          } else {
            res.writeHead(400, { 'Content-type': 'text/plain' });
            res.write(cowsay.say({ text: 'bad get request', f: `${cowType}` }));
          }
          res.end();
          return;
        }
      }

      // post request to /cowsay
      if (request.method === 'POST' && request.url.pathname === '/cowsay') {
        if (request.body) {
          if (request.body.cow) cowType = request.body.cow;
          res.writeHead(200, { 'Content-type': 'text/plain' });
          res.write(cowsay.say({ text: request.body.text, f: `${cowType}` }));
        } 
        res.end();
        return;
      }

      // 404 catch all
      res.writeHead(404, { 'Content-type': 'text/plain' });
      res.write(cowsay.say({ text: '404 invalid path', f: `${cowType}` }));
      res.end(); 
    })
    .catch((err) => {
      // if no request.body in a post request, this catch triggers
      logger.log(logger.ERROR, err);
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.write(cowsay.say({ text: 'bad request' }));
      res.end();
    });
});

const server = module.exports = {};
server.start = (port, cb) => app.listen(port, cb);
server.stop = cb => app.close(cb);
