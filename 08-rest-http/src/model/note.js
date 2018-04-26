'use strict';

const uuid = require('uuid/v4');

function Note(title, content, id = uuid()) {
  this.title = title;
  this.content = content;
  this.id = id;
}

module.exports = Note;
