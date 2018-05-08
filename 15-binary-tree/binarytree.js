module.exports = class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrderTraversal(node, callback) {
    callback(node);
    if (node.left) this.preOrderTraversal(node.left, callback);
    if (node.right) this.preOrderTraversal(node.right, callback);
  }

  inOrderTraversal(node, callback) {
    if (node.left) this.inOrderTraversal(node.left, callback);
    callback(node);
    if (node.right) this.inOrderTraversal(node.right, callback);
  }

  postOrderTraversal(node, callback) {
    if (node.left) this.postOrderTraversal(node.left, callback);
    if (node.right) this.postOrderTraversal(node.right, callback);
    callback(node);
  }
};

// bst.inOrderTraversal(bst.root, nd => console.log(nd.value));
