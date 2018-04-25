'use strict';

const server = require('../lib/server');
const superagent = require('superagent');

describe('Vanilla HTTP Server', () => {
  beforeAll(() => server.start(4444));
  afterAll(() => server.stop());

  describe('Valid GET request to default path /', () => {
    it('should respond with status 200', () => { // eslint-disable-line
      return superagent.get(':4444/')
        .then(res => expect(res.status).toBe(200))
        .catch();
    });

    it('should respond with message "Hello from my server!"', () => superagent.get(':4444/')
      .then(res => expect(res.text).toMatch(/Hello from my server!/))
      .catch());
  });

  describe('Valid GET request to /cowsay', () => {
    it('should respond with status 200', () => superagent.get(':4444/cowsay?text=hello&cow=dragon')
      .then(res => expect(res.status).toBe(200))
      .catch());

    it('should respond with message "hello"', () => superagent.get(':4444/cowsay?text="hello"')
      .then(res => expect(res.text).toMatch(/hello/))
      .catch());
  });

  describe('Invalid GET Request to the /cowsay', () => {
    it('should respond with a status 200', () => superagent.get(':4444/cowsay')
      .then()
      .catch(err => expect(err.status).toBe(400)));

    it('should respond with "bad get request"', () => superagent.get(':4444/cowsay')
      .then()
      .catch(err => expect(err.response.text).toMatch(/bad get request/)));
  });

  describe('Valid POST request to /cowsay', () => {
    it('should respond with a status 200', () => superagent.post(':4444/cowsay')
      .send({ text: 'hello', cow: 'dragon' })
      .then(res => expect(res.status).toBe(200))
      .catch());

    it('should respond with the body text', () => superagent.post(':4444/cowsay')
      .send({ text: 'hello' })
      .then(res => expect(res.text).toMatch(/hello/))
      .catch());
  });

  describe('Invalid POST request to /cowsay', () => {
    it('should respond with a status 400', () => superagent.post(':4444/cowsay')
      .then()
      .catch(err => expect(err.status).toBe(400)));

    it('should respond with "bad request"', () => superagent.post(':4444/cowsay')
      .then()
      .catch(err => expect(err.response.text).toMatch(/bad request/)));
  });

  describe('Invalid filepath', () => {
    it('should respond with a status 404', () => superagent.get(':4444/cats')
      .then()
      .catch(err => expect(err.status).toBe(404)));

    it('should respond with "Not Found"', () => superagent.get(':4444/cats')
      .then()
      .catch(err => expect(err.response.text).toMatch(/404 invalid path/)));
  });
});
