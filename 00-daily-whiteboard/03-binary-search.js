/* Write a function called BinarySearch which takes in 2 parameters: 
a sorted array and the search key. Without utilizing any of the built-in 
methods available to your language, return the index of the array’s 
element that is equal to the search key, or -1 if the element does not 
exist. */

const search = (arr, n) => { // eslint-disable-line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
};

/* 
// Actual binary search version 
const binarySearch = (arr, n) => { // eslint-disable-line
  let start = 0;
  let end = arr.length - 1;
  let mid = ~~((start + end) / 2);

  while (n !== arr[mid] && start < end) {
    if (n > arr[mid]) start = mid + 1;
    if (n < arr[mid]) end = mid - 1;
    mid = ~~((start + end) / 2);
  }

  return arr[mid] === n ? mid : -1;
};
*/
