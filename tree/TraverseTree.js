function BinaryTreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

function BinaryTree() {
  this._root = null
}

// Pre-order Traversal Time Complexity: O(n)
BinaryTree.prototype.traversePreOrder = function() {
    traversePreOrderHelper(this._root);

    function traversePreOrderHelper(node) {
        if (!node)
            return;
        traversePreOrderHelper(node.left);
        traversePreOrderHelper(node.right);
    }
}

BinaryTree.prototype.traversePreOrderIterative = function() {
  //create an empty stack and push root to it
  var nodeStack = [];
  nodeStack.push(this._root);
 
  // Pop all items one by one. Do following for every popped item
  // a) print it
  // b) push its right child
  // c) push its left child
  // Note that right child is pushed first so that left
  // is processed first */
  while (nodeStack.length) {
    //# Pop the top item from stack and print it
    var node = nodeStack.pop();
    console.log(node.value);

    //# Push right and left children of the popped node to stack

    if (node.right) nodeStack.push(node.right);
    if (node.left) nodeStack.push(node.left);
  }
}

// In-Order Traversal Time Complexity: O(n)

BinaryTree.prototype.traverseInOrder = function() {
    traverseInOrderHelper(this._root);

    function traverseInOrderHelper(node) {
        if (!node)
            return;
        traverseInOrderHelper(node.left);
        console.log(node.value);
        traverseInOrderHelper(node.right);
    }
}

BinaryTree.prototype.traverseInOrderIterative = function() {
    let current = this._root,
        s = [],
        done = false;

    while (!done) {
        // Reach the left most Node of the current Node
        if (current != null) {
            // Place pointer to a tree node on the stack
            // before traversing the node's left subtree
            s.push(current);
            current = current.left;
        } else {
            if (s.length) {
                current = s.pop();
                console.log(current.value);
                current = current.right;
            } else {
                done = true;
            }
        }
    }
}

// Post-order Traversal Time Complexity: O(n)

BinaryTree.prototype.traversePostOrder = function() {
    traversePostOrderHelper(this._root);

    function traversePostOrderHelper(node) {
        if (node.left)
            traversePostOrderHelper(node.left);
        if (node.right)
            traversePostOrderHelper(node.right);
        console.log(node.value);
    }
}

BinaryTree.prototype.traversePostOrderIterative = function() {
    // Create two stacks
    let s1 = [],
        s2 = [];

    // Push root to first stack
    s1.push(this._root);

    //# Run while first stack is not empty
    while (s1.length) {
        // Pop an item from s1 and append it to s2
        var node = s1.pop();
        s2.push(node);

        // Push left and right children of removed item to s1
        if (node.left)
            s1.push(node.left);
        if (node.right)
            s1.push(node.right);
    }
    // Print all eleements of second stack
    while (s2.length) {
        var node = s2.pop();
        console.log(node.value);
    }
}

// Level-Order Traversal Time Complexity: O(n)

BinaryTree.prototype.traverseLevelOrder = function() {
    // Breath first search
    let root = this._root,
        queue = [];

    if (!root)
        return;
    queue.push(root);

    while (queue.length) {
        let temp = queue.shift();
        console.log(temp.value);
        if (temp.left)
            queue.push(temp.left);
        if (temp.right)
            queue.push(temp.right);
    }
}

// If you know you need to explore the roots before inspecting any leaves, choose pre-order
// traversal because you will encounter all the roots before all of the leaves.
// If you know you need to explore all the leaves before any nodes, choose post-order
// traversal because you don’t waste any time inspecting roots when searching for leaves.
// If you know that the tree has an inherent sequence in the nodes and you want to
// flatten the tree into its original sequence, then you should use an in-order traversal.
// The tree would be flattened in the same way it was created. A pre-order or post-order
// traversal might not unwind the tree back into the sequence that was used to create it.

