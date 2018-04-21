/*
Write a function called largestProduct which takes in a 2D array. 
Without utilizing any of the built-in methods available to your language, 
return the largest product of 2 adjacent values within the 2D array.

Adjacency: just horizontally and vertically for this class.

EX: 
[ 
    [ 1, 2 ], 
    [ 3, 4 ], 
    [ 5, 6 ], 
    [ 7, 8 ] 
] -> 56

EX2:
[
    [5, 3, 2],
    [6, 7, 2],
    [9, 1, 4]
] -> 54
*/

const largestProduct = (arr) => { // eslint-disable-line
  let max = -Infinity;
  const outerLengthSubOne = arr.length - 1;
  const innerLength = arr[0].length;

  // handle all rows except last
  for (let h = 0; h < outerLengthSubOne; h++) {
    for (let w = 0; w < innerLength; w++) {
      const vertical = arr[h][w] * arr[h + 1][w];
      const horizontal = (w < innerLength - 1) ? arr[h][w] * arr[h][w + 1] : -Infinity;
      max = Math.max(max, vertical, horizontal);
    }
  }

  // handle last row separately for efficiency
  for (let w = 0; w < innerLength - 1; w++) {
    max = Math.max(max, arr[outerLengthSubOne][w] * arr[outerLengthSubOne][w + 1]);
  }

  return max;
};
