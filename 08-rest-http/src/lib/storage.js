'use strict';

const logger = require('../lib/logger');

const storage = module.exports = {};
const memory = {};

// memory = {
//   'Notes': {
//     '1234.5678.9012': {
//       'id': '1234.5678.9012',
//       'title': '',
//       'content': '',
//     },
//   },
//   'Categories': {
//     ...
//   },
// }

storage.create = function create(schema, item) {
  return new Promise((resolve, reject) => {
    if (!schema || !item) return reject(new Error('Schema and item required to create new item.'));
    if (!memory[schema]) memory[schema] = {};
    memory[schema][item.id] = item;
    logger.log(logger.INFO, 'Created a new thing.');
    return resolve(memory[schema][item.id]);
  });
}; 

storage.fetchOne = function fetchOne(schema, id) {
  return new Promise((resolve, reject) => {
    if (!schema || !id) return reject(new Error('Invalid fetch one request.'));
    if (!memory[schema][id]) return reject(new Error('Invalid get request; ID does not exist.'));
    logger.log(logger.INFO, 'Fetched one thing.');
    return resolve(memory[schema][id]);
  });
};

storage.fetchAll = function fetchAll(schema) {
  return new Promise((resolve, reject) => {
    if (!schema) return reject(new Error('Invalid fetch all request; no items available.'));
    if (!memory[schema]) return reject(new Error('Invalid get request; schema does not exist.'));
    logger.log(logger.INFO, 'Fetched all the things.');
    return resolve(memory[schema]);
  });
};

storage.update = function update(schema, item) {
  return new Promise((resolve, reject) => {
    if (!schema || !item) return reject(new Error('Invalid update request, schema and item needed.'));
    if (!memory[schema][item.id]) return reject(new Error('Invalid update request; item does not exist.'));
    logger.log(logger.INFO, 'Updating a thing.');
    memory[schema][item.id] = item;
    return resolve(item);
  });
};

storage.delete = function del(schema, id) {
  return new Promise((resolve, reject) => {
    if (!schema || !id) return reject(new Error('Invalid delete request; schema and ID required.'));
    if (!memory[schema][id]) return reject(new Error('Invalid delete request; item does not exist.'));
    delete memory[schema][id];
    return resolve(id);
  });
};
