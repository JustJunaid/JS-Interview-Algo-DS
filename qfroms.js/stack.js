class Stack {
	constructor() {
		this.data = []
	}

	push(element) {
		this.data = [...this.data, element]
	}

	pop() {
		return this.data.pop()
	}

	peek() {
		return this.data[this.data.length - 1]
	}
}

module.exports = Stack
