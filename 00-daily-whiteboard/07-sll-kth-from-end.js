/*
Write a method for the Linked List class called kthFromEnd which takes a number, 
k, as an argument. Return the node that is k from the end of the linked list. 
You have access to the Node class and all the properties on the Linked List 
class as well as the methods created in previous challenges.
*/

class LinkedList { // eslint-disable-line
  constructor(head = null) {
    this.head = head;
  }

  kthFromEnd(k) {
    if (!this.head) return new Error('No nodes in linked list.');
    let current = this.head;
    let count = 1;
    while (current.next) {
      current = current.next;
      count += 1;
    }

    const index = count - k;
    count = 0;
    current = this.head;
    while (current.next) {
      if (count === index) return current;
      current = current.next;
      count += 1;
    }
    return new Error(`${k} nodes do not exist in the list.`);
  }
}
