'use strict';

const Node = require('./nd');

module.exports = class {
  constructor(maxSize = 1048) {
    this.bottom = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  // Like Array.prototype.push()
  enqueue(val) {
    if (this.size === this.maxSize) throw new Error('Stack overflow!');
    const node = new Node(val);
    node.prev = this.bottom;
    if (!this.size) this.bottom = node;
    this.size += 1;
    return node;
  }

  // Like Array.prototype.shift()
  dequeue() {
    if (!this.size) throw new Error('Nothing to shift!');
    const temp = this.bottom;
    this.bottom = temp.prev;
    temp.prev = null;
    this.size -= 1;
    return temp;
  }

  peek() {
    if (!this.size) throw new Error('Nothing to peek at!');
    return this.bottom;
  }

  isEmpty() {
    if (!this.size) return true;
    return false;
  }
};
