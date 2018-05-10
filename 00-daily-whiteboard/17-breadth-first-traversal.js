/* Implement breadth first traversal for a tree. */

class BinaryTree { // eslint-disable-line
  constructor() {
    this.root = null;
  }

  breadthFirstTraversal(callback) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return this;
  }
}

// tree.breadthFirstTraversal(nd => console.log(nd.value));
