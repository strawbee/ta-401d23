/*
Write the following methods for the Linked List class:

.append(value) which adds a new node with the given value to the end of the list
.insertBefore(value, newVal) which add a new node with the given newValue 
immediately before the first value node
.insertAfter(value, newVal) which add a new node with the given newValue immediately 
after the first value node
You have access to the Node class and all the properties on the Linked List class.
*/

'use strict';

class SLLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SLL {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
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

  insertBefore(value, newVal) {
    if (!this.head) return new Error('Cannot insert before - no nodes in SLL.');
    if (this.head.value === value) {
      this.head = new SLLNode(newVal, this.head);
      return this;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = new SLLNode(newVal, current.next);
        return this;
      }
      current = current.next;
    }
    return null;
  }

  insertAfter(value, newVal) {
    if (!this.head) return new Error('Cannot insert after - no nodes in SLL.');
    let current = this.head;
    while (current) {
      if (current.value === value) {
        current.next = new SLLNode(newVal, current.next);
        return this;
      }
      current = current.next;
    }
    return null;
  }
}

module.exports = SLL;

