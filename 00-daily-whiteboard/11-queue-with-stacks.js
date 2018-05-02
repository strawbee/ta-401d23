/* Implement a queue with two stacks. */

class Node {
  constructor(val) {
    if (!val) return new Error('Value must be passed as argument');
    this.value = val;
    this.next = null;
  }
}

class Stack {
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
}

class Queue { // eslint-disable-line
  constructor(maxSize = 1048) {
    this.stack = new Stack(maxSize);
  }

  enqueue(val) {
    return this.stack.push(val);
  }

  dequeue() {
    const tempStack = new Stack();
    for (let i = 0; i < this.stack.size - 1; i++) tempStack.push(this.stack.pop());
    const temp = this.stack.pop();
    for (let i = 0; i < tempStack.size; i++) this.stack.push(tempStack.pop());
    return temp;
  }
}
