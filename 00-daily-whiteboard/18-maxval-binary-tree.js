/* Return the maximum value in a binary tree (not BST). */

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

  findMax() {
    let max = -Infinity;
    this.breadthFirstTraversal((nd) => {
      if (nd.value > max) max = nd.value;
    });
    return max;
  }
}
