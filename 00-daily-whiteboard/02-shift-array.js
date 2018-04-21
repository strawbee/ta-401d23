/* Write a function called insertShiftArray which takes in an array 
and the value to be added. Without utilizing any of the built-in methods 
available to your language, return an array with the new value added at 
the middle index. */

const insertShiftArray = (arr, val) => { // eslint-disable-line
  const res = [];
  for (let i = 0; i <= arr.length; i++) {
    if (i < arr.length / 2) res[i] = arr[i];
    else if (i === Math.ceil(arr.length / 2)) res[i] = val;
    else res[i] = arr[i - 1];
  }
  return res;
};
