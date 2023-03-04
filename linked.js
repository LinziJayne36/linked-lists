/* This is the linked lists exercise from the comp-sci section of 
The Odin Project Intermediate JS course. */

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
            this.tail = node; //The tail node must now ne the node we just added
        }

        this.length++;
    }
    prepend(value) {
        //TODO: Adds new node containing value to start of list
    }
    size() {
        //TODO: Returns total num of nodes in list
    }
    head() {
        //TODO: Returns 1st node in list
    }
    tail() {
        //TODO: Returns last node in list
    }
    at(index) {
        //TODO: Returns node at given index
    }
    pop() {
        //TODO: Removes last element from list
    }
    contains(value) {
        //TODO: Returns true if given value is in list, false if it's not
    }
    find(value) {
        //TODO: Returns index of node holding given value, returns null if value not present
    }
    toString() {
        //TODO: Represents LinkedList objects as strings in format:
        //( value ) -> ( value ) -> ( value ) -> null
        // This is useful for printing/previewing in console
    }
}

class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}
