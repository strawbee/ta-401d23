/* eslint-disable */
// Not my solution - example solution given for non-recursive
'use strict';

const fs = require('fs');

// non-recursive solution
module.exports = function read(filePaths, callback) {
  const result = [];
  fs.readFile(filePaths[0], (err, data) => {
    if (err) return callback(err);
    result.push(data.toString());
    fs.readFile(filePaths[1], (err, data) => {
      if (err) return callback(err);
      result.push(data.toString());
      fs.readFile(filePaths[2], (err, data) => {
        if (err) return callback(err);
        result.push(data.toString());
        callback(null, result);
      });
    });
  });
};
