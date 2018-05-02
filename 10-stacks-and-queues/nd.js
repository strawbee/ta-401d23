'use strict';

module.exports = class {
  constructor(val) {
    if (!val) return new Error('Value must be passed as argument');
    this.value = val;
    this.next = null;
  }
};
