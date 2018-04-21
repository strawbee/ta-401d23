/*
Ask the candidate to write a function to rotate a 3x3 matrix (an array of integers), 
by 90 degrees clockwise.
Avoid utilizing any of the built-in methods available to your language.
Don’t let the candidate get scared by the term “matrix”… It’s just an array of arrays.
*/

const rotate = (arr) => { // eslint-disable-line
  const result = [];
  for (let i = 0; i < arr[0].length; i++) {
    result.push([]);
    for (let j = 0; j < arr.length; j++) {
      const current = arr[arr.length - 1 - j][i];
      result[i].push(current);
    }
  }
  return result;
};
