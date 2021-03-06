// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	insertFirst(data) {
		this.head = new Node(data, this.head)
	}

	size() {
		let counter = 0
		let node = this.head

		while (node) {
			counter += 1
			node = node.next
		}

		return counter
	}

	getFirst() {
		return this.head
	}

	getLast() {
		if (!this.head) return null
		let node = this.head
		while (node) {
			if (node.next === null) return node
			node = node.next
		}
	}

	clear() {
		this.head = null
	}

	removeFirst() {
		if (!this.head) return null

		this.head = this.head.next
	}

	removeLast() {
		if (!this.head) return null
		if (!this.head.next) {
			this.head = null
			return
		}
		let previous = this.head
		let node = this.head.next
		while (node.next) {
			previous = node
			node = node.next
		}
		previous.next = null
	}

	insertLast(data) {
		const last = this.getLast()
		if (!last) this.head = new Node(data)
		else last.next = new Node(data)
	}

	getAt(index) {
		let node = this.head
		let counter = 0

		while (node) {
			if (counter === index) return node
			node = node.next
			counter++
		}
		return null
	}

	removeAt(index) {
		let node = this.head
		if (!node) return
		if (index === 0) {
			this.head = this.head.next
			return
		}
		let previous = this.getAt(index - 1)
		if (previous.next) previous.next = previous.next.next
	}

	insertAt(data, index) {
		const node = this.getAt(index) || this.insertLast(data)
		if (index === 0) {
			this.head = new Node(data, this.head)
			return
		}

		let previousNode = this.getAt(index - 1)
		if (previousNode) previousNode.next = new Node(data, node)
	}
}

const l = new LinkedList()
l.insertLast(1)
l.insertLast(2)
l.insertLast(3)
l.insertLast(4)
l.removeAt(0)

module.exports = { Node, LinkedList }
