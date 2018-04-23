'use strict';

module.exports = class SLLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};
