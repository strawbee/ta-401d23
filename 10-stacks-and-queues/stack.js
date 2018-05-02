'use strict';

const Node = require('./nd');

module.exports = class {
  constructor(maxSize = 1048) {
    this.top = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  push(val) {
    if (this.size === this.maxSize) throw new Error('Stack overflow!');
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
  }

  pop() {
    if (!this.size) throw new Error('Nothing to pop!');
    const temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size -= 1;
    return temp;
  }

  peek() {
    if (!this.size) throw new Error('Nothing to peek at!');
    return this.top;
  }

  isEmpty() {
    if (!this.size) return true;
    return false;
  }
};
