'use strict';

const server = require('../lib/server');
const superagent = require('superagent');

describe('Note routes', () => {
  beforeAll(() => server.start(4444));
  afterAll(() => server.stop());
  const notes = {};

  describe('POST', () => {
    it('should respond with success status 201', () => { // eslint-disable-line
      return superagent.post(':4444/api/v1/note')
        .send({ title: 'note1', content: 'note1 body' })
        .then((res) => {
          notes.note1 = res.body;
          expect(res.status).toBe(201);
        });
    });

    it('should return the saved note on success', () => { // eslint-disable-line
      return superagent.post(':4444/api/v1/note')
        .send({ title: 'note2', content: 'note2 body' })
        .then((res) => {
          notes.note2 = res.body;
          expect(res.body.title).toBe('note2');
          expect(res.body.content).toBe('note2 body');
        });
    });

    it('should return status 400 on invalid request', () => { // eslint-disable-line
      return superagent.post(':4444/api/v1/note')
        .then()
        .catch(err => expect(err.status).toBe(400));
    });

    it('should return message "Bad Request" invalid request', () => { // eslint-disable-line
      return superagent.post(':4444/api/v1/note')
        .then()
        .catch(err => expect(err.response.text).toMatch(/Bad Request/));
    });
  });

  describe('GET', () => {
    it('should respond with success status 200 when fetching one note', () => { // eslint-disable-line
      return superagent.get(`:4444/api/v1/note?id=${notes.note1.id}`)
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it('should return the correct note on success when fetching one note', () => { // eslint-disable-line
      return superagent.get(`:4444/api/v1/note?id=${notes.note1.id}`)
        .then((res) => {
          expect(res.body.title).toBe('note1');
          expect(res.body.content).toBe('note1 body');
        });
    });

    it('should respond with success status 200 when fetching all notes', () => { // eslint-disable-line
      return superagent.get(':4444/api/v1/note')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it('should return all notes on success when fetching all notes', () => { // eslint-disable-line
      return superagent.get(':4444/api/v1/note')
        .then((res) => {
          expect(res.body[notes.note1.id].title).toBe('note1');
          expect(res.body[notes.note2.id].title).toBe('note2');
        });
    });

    it('should return status 400 on invalid request', () => { // eslint-disable-line
      return superagent.get(':4444/api/v1/note?id=cats')
        .then()
        .catch((err) => {
          expect(err.status).toBe(400);
        });
    });

    it('should return message "Bad Request" invalid request', () => { // eslint-disable-line
      return superagent.post(':4444/api/v1/note?id=cats')
        .then()
        .catch(err => expect(err.response.text).toMatch(/Bad Request/));
    });

    it('should return status 404 on invalid path', () => { // eslint-disable-line
      return superagent.get(':4444/api/v1/cats')
        .then()
        .catch((err) => {
          expect(err.status).toBe(404);
        });
    });
  });

  describe('PUT', () => {
    it('should respond with success status 204', () => { // eslint-disable-line
      return superagent.put(':4444/api/v1/note')
        .send({ title: 'note1 updated', content: 'note1 body updated', id: notes.note1.id })
        .then((res) => {
          expect(res.status).toBe(204);
        });
    });

    it('should update the note', () => { // eslint-disable-line
      return superagent.get(`:4444/api/v1/note?id=${notes.note1.id}`)
        .then((res) => {
          expect(res.body.title).toBe('note1 updated');
          expect(res.body.content).toBe('note1 body updated');
        });
    });

    it('should return status 400 on invalid request', () => { // eslint-disable-line
      return superagent.put(':4444/api/v1/note')
        .then()
        .catch(err => expect(err.status).toBe(400));
    });

    it('should return message "Bad Request" invalid request', () => { // eslint-disable-line
      return superagent.put(':4444/api/v1/note')
        .then()
        .catch(err => expect(err.response.text).toMatch(/Bad Request/));
    });
  });

  describe('DELETE', () => {
    it('should respond with success status 204', () => { // eslint-disable-line
      return superagent.delete(`:4444/api/v1/note?id=${notes.note1.id}`)
        .then((res) => {
          expect(res.status).toBe(204);
        });
    });

    it('should delete the note', () => { // eslint-disable-line
      return superagent.get(`:4444/api/v1/note?id=${notes.note1.id}`)
        .then()
        .catch((err) => {
          expect(err.status).toBe(400);
          expect(err.response.text).toMatch(/Bad Get Request/);
        });
    });

    it('should return status 400 on invalid request', () => { // eslint-disable-line
      return superagent.delete(':4444/api/v1/note?id=cats')
        .then()
        .catch(err => expect(err.status).toBe(400));
    });

    it('should return message "Bad Delete Request" invalid request', () => { // eslint-disable-line
      return superagent.delete(':4444/api/v1/note?cats')
        .then()
        .catch(err => expect(err.response.text).toMatch(/Bad Delete Request/));
    });
  });
});
