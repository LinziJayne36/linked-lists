/* This is the linked lists exercise from the comp-sci section of 
The Odin Project Intermediate JS course. Run this project by navigating to its directory and running `node linked.js` */

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        //Adds new node containing value to end of list
        const node = new Node(value); //creates the new node using our Node class (a node has this.value and this.nextNode)

        if (!this.head) {
            //if this.head has no value, the list is empty so we set the head and tail to be the node we just created
            this.head = node;
            this.tail = node;
        } else {
            //if this.head does have a value, then there are already item(s) in the list
            //So, the `nextNode` property of the `tail` is set to the new (next) node...
            this.tail.nextNode = node;
            this.tail = node; //The tail node must now be the node we just added
        }

        this.length++;
    }
    prepend(value) {
        //Adds new node containing value to start of list
        const node = new Node(value); //creates new node using our Node class (a node has this.value and this.nextNode)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            // If list is not empty, add new node before current head.
            node.nextNode = this.head; // Set `nextNode` property of new node to current head.
            this.head = node; //Set `head` property of list to new node.
        }

        this.length++;
    }
    size() {
        //Returns total num of nodes in list
        return this.length;
    }
    headNode() {
        //Returns 1st node in list
        return this.head.value;
    }
    tailNode() {
        //Returns last node in list
        return this.tail.value;
    }
    at(index) {
        //Returns node at given index
        if (index < 0 || index >= this.length) {
            return null; // Return null if index out of range.
        }

        let currentNode = this.head;
        let count = 0;

        while (count !== index) {
            // Iterate list until index is reached.
            currentNode = currentNode.nextNode;
            count++;
        }

        return currentNode; // Return the node at the specified index.
    }
    pop() {
        //Removes last element from list
        if (!this.head) {
            // If list is empty, return null
            return null;
        }

        if (this.tail === this.head) {
            //if list has only 1 item, reset properties to defaults
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        //if list contains > 1 items
        let currentNode = this.head; //start from 1st item
        let lastButOneNode = null;
        //while a nextNode still exists, loop through list
        while (currentNode.nextNode) {
            lastButOneNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        lastButOneNode.nextNode = null; //Remove pointer to the last node we wish to delete
        this.tail = lastButOneNode; //Set the previous last but one node to be tail node
        this.length--; //Adjust list length by -1
        return currentNode.value; //Return value of removed node to caller
    }

    contains(value) {
        //Returns true if given value is in list, false if it's not

        if (!this.head) {
            //If list is empty, return false as value is not there!
            return false;
        }

        let currentNode = this.head; //will start searching here
        while (currentNode) {
            //while the list is not empty, loop and check...
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }

        return false; //because everything is now checked and value is not there
    }

    find(value) {
        //Returns index of node holding given value, returns null if value not present
        if (!this.head) {
            //If list is empty, return null as value is not there!
            return null;
        }
        let currentNode = this.head; //will start searching here
        let index = 0; //initialize our index counter
        while (currentNode) {
            //while the list is not empty, loop and check...
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null; // This line runs when all is searched and value not found
    }

    toString() {
        //TODO: Represents LinkedList objects as strings in format:
        //( value ) -> ( value ) -> ( value ) -> null
        // This is useful for printing/previewing in console

        let currentNode = this.head;
        let str = "";
        while (currentNode) {
            str += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        str += "null";
        return str;
    }
}

class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}

const myList = new LinkedList();
myList.append(41);
myList.append(11, 12);
myList.prepend(1001);
myList.append(999);
console.log(myList.headNode()); //see output of head method
console.log(myList.tailNode()); //see output of tail method
console.log(myList.size()); //see output of size method
console.log(myList.contains(11, 12)); // see output (boolean) of contains method
console.log(myList.at(2)); //see output (node) of at method
console.log(myList.find(999)); //see output (index num) of find method
myList.pop(); //remove last list item
console.log(myList.tailNode()); // check if pop() removed last item
console.log(myList.toString()); //see output of toString method
