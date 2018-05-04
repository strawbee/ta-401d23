/*
Ask the candidate to write a ‘Max Stack’ which is defined as a Stack with an 
additional getMax() member function which returns the ‘biggest’ element in the Stack.

Only numerical values.
No repeating values.
*/

// let's just do it the lazy O(n) way
class Stack {
  constructor() {
    this.storage = [];
  }

  push(value) {
    this.storage.push(value);
    return this;
  }

  pop(value) {
    this.storage.pop(value);
    return this;
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  getMax() {
    if (!this.storage.length) return null;
    let max = -Infinity;
    for (const i of this.storage) { // eslint-disable-line
      if (i > max) max = i;
    }
    return max;
  }

  isEmpty() {
    return !this.storage.length;
  }
}
