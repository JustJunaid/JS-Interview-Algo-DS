class Queue {
	constructor() {
		this.qData = []
	}
	add(record) {
		this.qData.unshift(record)
	}
	remove() {
		return this.qData.pop()
	}
}

module.exports = Queue

const q = new Queue()
q.add(1) // adds to the first of the queue
q.add(2) // adds to the first of the queue
q.remove() //removes the last element

// console.log('q', q) // [2]
