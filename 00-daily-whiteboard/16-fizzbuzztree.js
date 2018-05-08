/*
Write a function called FizzBuzzTree which takes a tree as an argument.
Without utilizing any of the built-in methods available to your language, 
determine weather or not the value of each node is divisible by 3, 5 or both, 
and change the value of each of the nodes respectively. Return the tree with 
its new values.
*/

// Traversing breadth-first
const fizzBuzzTree = (tree, callback) => {
  const queue = [tree.root];
  while (queue.length) {
    const node = queue.shift();
    callback(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return tree;
};

// DEMO CODE
const tree = {
  root: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: {
        value: 5,
        left: null,
        right: null,
      },
    },
    right: {
      value: 15,
      left: null,
      right: null,
    },
  },
};

fizzBuzzTree(tree, (nd) => {
  let str = '';
  if (!(nd.value % 3)) str = 'Fizz';
  if (!(nd.value % 5)) str += 'Buzz';
  if (str) nd.value = str;
});
