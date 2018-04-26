'use strict';

const urlParser = require('url');
const queryString = require('querystring');

module.exports = (req) => {
  req.url = urlParser.parse(req.url);
  req.url.query = queryString.parse(req.url.query);
  return Promise.resolve(req);
};
