/*
Write a function called mergeLists which takes two linked lists as arguments. 
Zip the two linked lists together into one so that the nodes alternate between 
the two lists and return a reference to the head of the single list. Try and 
keep additional space down to O(1). You have access to the Node class and all 
the properties on the Linked List class as well as the methods created in 
previous challenges.
*/

const mergeLists = (list1, list2) => { // eslint-disable-line
  let current = list1.head;
  let current2 = list2.head;
  while (current && current2) {
    const temp = current.next;
    const temp2 = current2.next;
    current.next = current2;
    if (temp) current2.next = temp;
    current = temp;
    current2 = temp2;
  }
  return list1.head;
};
