/*
Write a method for the Linked List class called hasLoop which takes no arguments. 
Return a boolean that indicates whether or not a circular reference or loop is 
present in the linked list. Your implementation must not use any additional memory 
or modify the nodes of the linked list. You have access to the Node class and all 
the standard properties on the Linked List class as well as the methods created in 
previous challenges.
Note: Length or Size are *not* included in standard properties for a LL.
*/

class SLL {
  constructor() {
    this.head = null;
  }

  hasLoop() {
    let walker = this.head;
    let runner = this.head;
    while (walker !== runner) {
      walker = walker.next;
      if (runner.next) { 
        runner = runner.next.next;
      } else return false;
      if (!walker || !runner) return false;
    }
    return true;
  }
}
