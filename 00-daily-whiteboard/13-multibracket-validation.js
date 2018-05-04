/* eslint-disable */
/*
On your main file, create a function called multiBracketValidation(input)
Your function should take a string as its only argument, and should return a 
boolean representing whether or not the brackets in the string are balanced. 

There are 3 types of brackets:
Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

Input | Output
{} | TRUE
{}(){} | TRUE
()[[Extra Characters]] | TRUE
(){}[[]] | TRUE
{}{Code}[Fellows](()) | TRUE
[({}] | FALSE
(]( | FALSE
*/

const multiBracketValidation = (str) => {
  const stack = [];
  for (const i of str) {
    if (i === '(') stack.push(')');
    else if (i === '{') stack.push('}');
    else if (i === '[') stack.push(']');
    else if ((i === ')' || i === '}' || i === ']') && i !== stack.pop()) return false;
  }
  return !stack.length;
};
