class LinkedList {
    constructor(head = null){
        this.head = head
    }
    size(){
        let count = 0;
        let node = this.head
        while(node){
            count++;
            node = node.next
        }
        return count
    }
    forEach(cb){
        let node = this.head
        while(node){
            cb(node)
            node = node.next
        }
    }
    getLast() {
        let node = this.head
        while(node.next){
            node = node.next
        }
        return node
    }
    addTo(data){
        let newNode = new Node(data)
        this.getLast().next = newNode
    }
}

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
let nodeA = new Node('A')

let list = new LinkedList(nodeA)

let nodeB = new Node('B')

nodeA.next = nodeB

let nodeC = new Node ('C')

nodeA.next = nodeC
nodeC.next = nodeB

list.addTo('D')

console.log(list.getLast())