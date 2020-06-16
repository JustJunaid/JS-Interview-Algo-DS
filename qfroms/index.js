// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack')

class Queue {
	constructor() {
		this.stackOne = new Stack()
		this.stackTwo = new Stack()
	}

	add(record) {
		this.stackOne.push(record)
	}

	qfromStack(fromStack, toStack) {
		while (fromStack.peek()) {
			toStack.push(fromStack.pop())
		}
	}

	peek() {
		this.qfromStack(this.stackOne, this.stackTwo)

		const result = this.stackTwo.peek()

		this.qfromStack(this.stackTwo, this.stackOne)

		return result
	}

	remove() {
		this.qfromStack(this.stackOne, this.stackTwo)

		const result = this.stackTwo.pop()

		this.qfromStack(this.stackTwo, this.stackOne)

		return result
	}
}

module.exports = Queue
