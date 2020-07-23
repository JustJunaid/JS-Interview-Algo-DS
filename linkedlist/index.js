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

		return node
	}

	clear() {
		this.head = null
	}

	removeFirst() {
		if (!this.head) return null

		this.head = this.head.next
	}

	// removeLast() {
	// 	if (!this.head) return null
	// 	let previous = this.head
	// 	let node = this.head.next
	// 	while (previous) {
	// 		previous.next = null
	// 		if (node.next === null) {
	// 			nod
	// 		}
	// 	}
	// }
}

module.exports = { Node, LinkedList }
