const Node = require('./Node.js');

class LinkedList {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    append(value) {
        this.length++;
        if (this.root == null) {
            this.root = new Node(value);
            return;
        }

        let pointer = this.root;

        while (pointer.nextNode) {
            pointer = pointer.nextNode;
        }

        pointer.nextNode = new Node(value);
    }

    prepend(value) {
        this.length++;
        if (this.root == null) {
            this.root = new Node(value);
            return;
        }

        const newRoot = new Node(value);
        let pointer = this.root;
        this.root = newRoot;
        this.root.nextNode = pointer;
    }

    size() {
        return this.length;
    }

    head() {
        return this.root.value;
    }

    tail() {
        let pointer = this.root;

        while(pointer.nextNode) {
            pointer = pointer.nextNode;
        }

        return pointer.value;
    }

    at(index) {
        if (this.root == null) {
            throw new Error("Linked List is empty!");
        } else if (index < 0 || index >= this.length) {
            throw new Error("Input index out of bounds!");
        }

        let i = 0;
        let pointer = this.root;

        while (i != index) {
            pointer = pointer.nextNode;
            i++;
        }

        return pointer.value;
    }

    pop() {
        let pointer = this.root;
        let nextNodePtr = this.root.nextNode;

        while (nextNodePtr.nextNode != null) {
            pointer = pointer.nextNode;
            nextNodePtr = pointer.nextNode
        }

        pointer.nextNode = null;
        this.length--;
    }

    contains(value) {
        let pointer = this.root;
        let isNodeFound = false;

        while (pointer != null) {
            if (pointer.value == value) {
                isNodeFound = true;
            }

            pointer = pointer.nextNode;
        }

        return isNodeFound;
    }

    find(value) {
        let pointer = this.root;
        let index = 0;

        while (pointer != null) {
            if (pointer.value == value) {
                return index;
            }

            index++;
            pointer = pointer.nextNode;
        }

        return null;
    }

    toString() {
        if (this.root == null) {
            console.log('null');
            return;
        }

        let pointer = this.root;
        let logMsg = '';

        while (pointer != null) {
            logMsg += '( ' + pointer.value + ' ) -> ';
            pointer = pointer.nextNode;
        }

        logMsg += 'null';
        console.log(logMsg);
    }

    insertAt(value, index) {
        if (this.root == null) {
            throw new Error("Linked List is empty!");
        } else if (index < 0 || index >= this.length) {
            throw new Error("Input index out of bounds!");
        } else if (index == 0) {
            this.prepend(value);
            return;
        }

        let i = 0;
        let pointer = this.root;

        while (i < index - 1) {
            pointer = pointer.nextNode;
            i++;
        }

        const newNode = new Node(value);
        let restOfLL = pointer.nextNode;
        pointer.nextNode = newNode;
        newNode.nextNode = restOfLL;
        this.length++;
    }

    removeAt(index) {
        let i = 0;
        let pointer = this.root;

        if (this.root == null) {
            throw new Error("Linked List is empty!");
        } else if (index < 0 || index >= this.length) {
            throw new Error("Input index out of bounds!");
        } else if (index == 0) {
            let restOfLL = pointer.nextNode;
            this.root = restOfLL;
            return;
        }

        let nodeRmPtr = this.root;

        while (i != index) {
            nodeRmPtr = nodeRmPtr.nextNode;
            i++;
            if (i == index) {
                break;
            }
            pointer = pointer.nextNode;
        }

        let restOfLL = nodeRmPtr.nextNode;
        nodeRmPtr.nextNode = null;
        pointer.nextNode = restOfLL;
        this.length--;
    }

}

module.exports = LinkedList;

let ll = new LinkedList();
ll.append(1);
ll.append(3);
ll.append(5);
ll.prepend(2);
ll.prepend(4);
console.log(ll.at(4));
ll.toString();
ll.pop();
ll.toString();
console.log(ll.contains(1));
console.log(ll.contains(10));
console.log(ll.find(3));
console.log(ll.find(2));
console.log(ll.find(100));
ll.insertAt(66, 2);
ll.insertAt(100, 4);
ll.insertAt(-5, 5);
ll.toString();
console.log(ll.size());
ll.removeAt(0);
ll.toString();
ll.removeAt(1);
ll.toString();
ll.removeAt(4);
ll.toString();
