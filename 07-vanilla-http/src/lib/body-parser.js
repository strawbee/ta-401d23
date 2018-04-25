'use strict';

const urlParser = require('url');
const queryString = require('querystring');

module.exports = request => new Promise((resolve, reject) => {
  request.url = urlParser.parse(request.url);
  request.url.query = queryString.parse(request.url.query);

  if (request.method !== 'POST' && request.method !== 'PUT') return resolve(request);

  let message = '';

  request.on('data', (data) => {
    // data is in the form of a buffer, so we are converting it to string (JSON)
    message += data.toString();
  });

  request.on('end', () => {
    try {
      // convert the message string to an actual object (i.e. in this case: { text: 'hello' })
      request.body = JSON.parse(message);
      return resolve(request);
    } catch (err) {
      return reject(err);
    }
  });

  return request.on('error', err => reject(err)); 
});
