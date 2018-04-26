'use strict';

const bodyParser = require('./body-parser');
const urlParser = require('./url-parser');
const logger = require('./logger');

function Router() {
  this.routes = {
    GET: {
      // '/api/v1/note': (req, res) => {},
      // '/api/v1/note/:id': (req, res) => {},
    },
    POST: {},
    PUT: {},
    DELETE: {},
  };

  Router.prototype.get = function routeGet(endpoint, callback) {
    this.routes.GET[endpoint] = callback;
  };

  Router.prototype.post = function routePost(endpoint, callback) {
    this.routes.POST[endpoint] = callback;
  };

  Router.prototype.put = function routePut(endpoint, callback) {
    this.routes.PUT[endpoint] = callback;
  };

  Router.prototype.delete = function routeDelete(endpoint, callback) {
    this.routes.DELETE[endpoint] = callback;
  };

  Router.prototype.route = function route() {
    return (req, res) => {
      Promise.all([
        urlParser(req),
        bodyParser(req),
      ])
        .then(() => {
          if (typeof this.routes[req.method][req.url.pathname] === 'function') {
            this.routes[req.method][req.url.pathname](req, res);
            return;
          }

          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.write('404 Invalid Path');
          res.end(); 
        })
        .catch((err) => {
          logger.log(logger.ERROR, 'bodyParser error', err);
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.write('Bad Request; Cannot Parse', err);
          res.end();
        });
    };
  };
}

module.exports = Router;
