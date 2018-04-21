/* Write a function called reverseArray which takes an array as an argument. 
Without utilizing any of the built-in methods available to your language, 
return the provided array argument with elements in reversed order. */

const reverseArray = (arr) => { // eslint-disable-line
  const res = [];
  for (let i = 0; i < arr.length; i++) res[i] = arr[arr.length - 1 - i];
  return res;
};

// In place solution
const reverseArrayInPlace = (arr) => { // eslint-disable-line
  const len = arr.length;
  const mid = len / 2;
  let temp;

  for (let i = 0; i < mid; i++) {
    temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
  return arr;
};
