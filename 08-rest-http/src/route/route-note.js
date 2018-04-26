'use strict';

const Note = require('../model/note');
const storage = require('../lib/storage');
const logger = require('../lib/logger');

module.exports = function routeNote(router) {
  router.post('/api/v1/note', (req, res) => {
    const newNote = new Note(req.body.title, req.body.content);
    storage.create('Note', newNote)
      .then((storedNote) => {
        logger.log(logger.INFO, 'Created a note.');
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(storedNote));
        res.end();
      })
      .catch((err) => {
        logger.log(logger.ERROR, 'Bad post request: ', err);
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.write('Bad Post Request');
        res.end();
      });
  });

  router.get('/api/v1/note', (req, res) => {
    if (req.url.query.id) {
      storage.fetchOne('Note', req.url.query.id)
        .then((note) => {
          logger.log(logger.INFO, 'Fetched one note.');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(note));
          res.end();
        })
        .catch((err) => {
          logger.log(logger.ERROR, 'Bad get request: ', err);
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.write('Bad Get Request');
          res.end();
        });
    } else {
      storage.fetchAll('Note')
        .then((notes) => {
          logger.log(logger.INFO, 'Fetched all notes.');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(notes));
          res.end();
        })
        .catch((err) => {
          logger.log(logger.ERROR, 'Bad get request: ', err);
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.write('Bad Get Request');
          res.end();
        });
    }
  });

  router.put('/api/v1/note', (req, res) => {
    const updatedNote = new Note(req.body.title, req.body.content, req.body.id);
    storage.update('Note', updatedNote)
      .then((note) => {
        logger.log(logger.INFO, 'Updated a thing.');
        res.writeHead(204, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(note));
        res.end();
      })
      .catch((err) => {
        logger.log(logger.ERROR, 'Bad put request: ', err);
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.write('Bad Put Request');
        res.end();
      });
  });

  router.delete('/api/v1/note', (req, res) => {
    storage.delete('Note', req.url.query.id)
      .then(() => {
        logger.log(logger.INFO, 'Deleted a note.');
        res.writeHead(204, { 'Content-Type': 'text/plain' });
        res.write('Note Successfully Deleted');
        res.end();
      })
      .catch((err) => {
        logger.log(logger.ERROR, 'Bad delete request: ', err);
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.write('Bad Delete Request');
        res.end();
      }); 
  });
};
