/*
Write a function called EeneyMeeneyMineyMoe() that accepts a list of strings 
and an int n. Start at the beginning of the list and count up to n and remove 
the person at the current index from the list. Keep counting from that index and 
count up to n over and over until only one person is left in the list. Return a 
string with the name of the last person left in the list.
*/

const lastOneStanding = (items, n) => { // eslint-disable-line
  const arr = [...items];
  let i = 0;
  while (arr.length > 1) {
    i += n - 1;
    if (i >= arr.length) i %= arr.length;
    arr.splice(i, 1);
  }
  return arr[0];
};
