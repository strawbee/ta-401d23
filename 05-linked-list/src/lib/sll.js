'use strict';

const SLLNode = require('./sll-node');

module.exports = class SLL { // eslint-disable-line
  constructor(head = null) {
    this.head = head;
  }

  shift(value) {
    this.head = new SLLNode(value, this.head);
    return this;
  }

  push(value) {
    const node = new SLLNode(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = node;
    return this;
  }

  unshift() {
    if (!this.head) return new Error('Cannot unshift - no nodes in SLL.');
    this.head = this.head.next;
    return this;
  }

  pop() {
    if (!this.head) return new Error('Cannot pop - no nodes in SLL.');
    if (!this.head.next) {
      this.head = null;
      return this;
    }
    let current = this.head;
    while (current.next.next) current = current.next;
    current.next = null;
    return this;
  }

  find(value) {
    if (!this.head) return new Error('Cannot find - no nodes in SLL.');
    let current = this.head;
    while (current.next) {
      if (current.value === value) return current;
      current = current.next;
    }
    return (current.value === value) ? current : null;
  }

  map(callback) {
    if (!this.head) return new Error('Cannot map - no nodes in SLL.');
    const newSLL = new SLL();
    let current = this.head;
    while (current) {
      newSLL.push(current.value);
      current = current.next;
    }
    current = newSLL.head;
    while (current) {
      callback(current);
      current = current.next;
    }
    return newSLL;
  }
  
  reduce(callback, initialValue) {
    if (!this.head) return new Error('Cannot reduce - no nodes in SLL.');
    let result = initialValue;
    let current = this.head;
    if (!result) {
      result = current.value;
      current = current.next;
    }
    while (current) {
      result = callback(result, current.value);
      current = current.next;
    }
    return result;
  }
};

