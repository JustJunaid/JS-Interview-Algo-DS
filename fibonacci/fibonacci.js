// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative soln
// const fib = (n) => {
//   let arr = [0, 1]
//   for (let i = 1; i < n; i++) {
//     arr = [...arr, arr[i - 1] + arr[i]]
//   }
//   return arr[n]
// }

// Recursive soln
let fib = (n) => {
	if (n < 2) return n
	return fib(n - 2) + fib(n - 1)
}

const memoize = (fn) => {
	let cacheObj = {}
	return (...args) => {
		if (cacheObj[args]) cacheObj[args]
		return fn.apply(this, args)
		// return fn(args)
	}
}

fib = memoize(fib)

console.log('fib', fib(30))

module.exports = fib
