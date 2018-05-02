/* Reverse a singly linked list. */

class SLL { // eslint-disable-line
  constructor() {
    this.head = null;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.next) {
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
      } else {
        current.next = prev;
        this.head = current;
        return this;
      }
    }
    return this;
  }
}
