/* Validate whether a singly linked list is a palindrome. */

class SLL { // eslint-disable-line
  constructor() {
    this.head = null;
  }

  isPalindrome() {
    let current = this.head;
    const arr = [];

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    for (let i = 0; i < ~~(arr.length / 2); i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
  }
}
