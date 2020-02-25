function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype.insert = function(value) { // Time Complexity (for balanced trees): O(log2(n))
                                                      // Time Complexity (for unbalanced trees): O(n)
    let thisNode = {
        left: null,
        right: null,
        value: value
    };
    if (!this._root) {
        //if there is no root value yet
        this._root = thisNode;
    } else {
        //loop traverse until
        let currentRoot = this._root;
        while (true) {
            if (currentRoot.value > value) {
                //let's increment if it's not a null and insert if it is a null
                if (currentRoot.left != null) {
                    currentRoot = currentRoot.left;
                } else {
                    currentRoot.left = thisNode;
                    break;
                }
            } else if (currentRoot.value < value) {
                //if bigger than current, put it on the right
                //let's increment if it's not a null and insert if it is a null
                if (currentRoot.right != null) {
                    currentRoot = currentRoot.right;
                } else {
                    currentRoot.right = thisNode;
                    break;
                }
            } else {
                //case that both are the same
                break;
            }
        }
    }
}

BinarySearchTree.prototype.remove = function(value) {  // Time Complexity (for balanced tree): O(log2(n))
                                                       // Time Complexity (for unbalanced trees): O(n)
    return deleteRecursively(this._root, value);

    function deleteRecursively(root, value) {
        if (!root) {
            return null;
        } else if (value < root.value) {
            root.left = deleteRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = deleteRecursively(root.right, value);
        } else {
            //no child
            if (!root.left && !root.right) {
                return null; // case 1  The node has no children
            } else if (!root.left) { // case 2 The node has one child
                root = root.right;
                return root;
            } else if (!root.right) { // case 2 The node has one child
                root = root.left;
                return root;
            } else {
                var temp = findMin(root.right); // case 3 The node has two children
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        return root;
    }

    function findMin(root) {
        while (root.left) {
            root = root.left;
        }
        return root;
    }
}

BinarySearchTree.prototype.findNode = function(value) { // Time Complexity (for balanced tree): O(log2(n))
                                                        // Time Complexity (for unbalanced trees): O(n)
    var currentRoot = this._root,
        found = false;
    while (currentRoot) {
        if (currentRoot.value > value) {
            currentRoot = currentRoot.left;
        } else if (currentRoot.value < value) {
            currentRoot = currentRoot.right;
        } else {
            //we've found the node
            found = true;
            break;
        }
    }
    return found;
}

const bst1 = new BinarySearchTree();
bst1.insert(1);
bst1.insert(3);
bst1.insert(2);
bst1.findNode(3); // true
bst1.findNode(5); // false
