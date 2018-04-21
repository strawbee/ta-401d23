![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 01: Node Ecosystem
===

## Submission Instructions
* Read this document entirely and estimate how long this assignment will take.
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Submit on canvas a question and observation,your original estimate, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.

* **README.md** - contains your documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **lib/** - contains module definitions
* **__test__/** - contains unit tests

## Testing

### Greet Module Tests
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument

### Arithmetic Module Tests
* Test each method for proper use (invoked with number arguments)
* Test each method for inproper use (invoked with one or more non-number arguments)

## Feature Tasks

### Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as its input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

### Arithmetic Module
Create a NodeJS module in the `lib` directory named `arithmetic.js`. This module exports an object and should have `add` and `sub` methods that implement addition and subtraction.
* The `add` method should have a 2 parameters (airty of two)
  * `if` either argument is a non-number the function should return `null`
  * `else` return the sum of the 2 numbers
* The `sub` method should have 2 parameters (airty of two)
  * `if` either argument is a non-number the function should return `null`
  * `else` return the second parameter subtracted from the first parameter

### Documentation
In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.
