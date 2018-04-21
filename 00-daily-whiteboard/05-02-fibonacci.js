/*
Ask the candidate to write a function to accepts an integer, 
and returns the nth number in the Fibonacci sequence.
Solve iteratively and recursively and analyze Big O.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
*/

const iterativeFibonacci = () => {
  const cache = {
    1: 0,
    2: 1,
  };
  const findNth = (n) => {
    if (cache[n]) return cache[n];
    if (!Number.isInteger(n) || n === 0) return new Error('Invalid argument.');
    let first = 0;
    let second = 1;
    let result;
    for (let i = 3; i <= n; i++) {
      result = first + second;
      cache[i] = result;
      first = second;
      second = result;
    }
    return result;
  };
  return findNth;
};

const memoizedIterativeFibonacci = iterativeFibonacci(); // eslint-disable-line

// recursive solution - preferable if using memoization, otherwise too expensive (O^2n)
const recursiveFibonacci = () => {
  const cache = {};
  const findNth = (n) => {
    if (cache[n]) return cache[n];
    if (!Number.isInteger(n) || n === 0) return new Error('Invalid argument.');
    if (n === 1) return 0;
    if (n === 2) return 1;
    cache[n] = findNth(n - 1) + findNth(n - 2);
    return cache[n];
  };
  return findNth;
};

const memoizedRecursiveFibonacci = recursiveFibonacci();

console.time('memoizedRecursiveFibonacci'); // eslint-disable-line
console.log(memoizedRecursiveFibonacci(50)); // eslint-disable-line
console.timeEnd('memoizedRecursiveFibonacci'); // eslint-disable-line

console.time('memoizedRecursiveFibonacci'); // eslint-disable-line
console.log(memoizedRecursiveFibonacci(50)); // eslint-disable-line
console.timeEnd('memoizedRecursiveFibonacci'); // eslint-disable-line