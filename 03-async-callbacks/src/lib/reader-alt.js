const fs = require('fs');
const logger = require('./logger');

// the way it was done in class + main.js
module.exports = (path, callback) => {
  logger.log(logger.VERBOSE, `Reading ${path}`);
  return fs.readFile(path, (err, buffer) => {
    if (err) logger.log(logger.INFO, err);
    return callback(buffer.toString());
  });
};
