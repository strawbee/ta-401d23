'use strict';

const fs = require('fs');

// my solution
exports.read = (paths, callback, result = []) => {
  // Error checking - if paths argument is not an array
  if (!Array.isArray(paths)) {
    callback('ERROR: Paths argument is not an array');
    return;
  }

  // Error checking - if no paths and no results processed
  if (!paths[0] && !result[0]) {
    callback('ERROR: Paths argument is an empty array');
    return;
  }

  // After all paths have been precessed, invoke callback with result array as data
  if (!paths[0] && result[0]) {
    callback(null, result);
    return;
  }

  /* The async part - shifts one element of paths array into results,
  then recursively calls exports.read again to process the next elements */
  fs.readFile(paths.shift(), (err, data) => {
    if (err) return callback(err);
    if (!data) return new Error(err);
    result.push(data.toString());
    return exports.read(paths, callback, result);
  });
};
