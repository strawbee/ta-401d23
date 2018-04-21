# Lab 02 - Tools and Context - Answers
Given the code:

```
'use strict'

var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz(foo) {

    foo = 'bam';
    bam = 'yay';
  }
  baz();
}

bar();
foo;
bam;
baz();
```

### 1. When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?
The two stages of execution are first, compilation, and second, execution of the code.

### 2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
The compilation involves the registering of variables in their scope and hoisting all declarations to the top of their scope.

First, we recognize the global variables foo and function bar.

Then, we enter the scope of the function bar, and we register a separate variable foo and function baz.

Finally, we enter the scope of the baz function and register foo there. 

### 3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
The actual assignment of the code happens in the second phase and tasks are added to the call stack. Once a task is completed, it is removed from the call stack.

We check to see that each variable was registered in their scope (first, variable foo and function bar in the global scope).

When we execute bar, we check to see that the variable foo and function baz was registered in the bar scope.

When we execute bam in the bar scope, we enter the baz scope and check for the variables foo and bam. In strict mode, we would receive a reference error because the variable bam inside the baz function was never declared. When we don't see it in the baz scope, we check for the bam registration in the bar scope and then the global scope. If we are not in strict mode and no registration exists, it will be created in the global scope.

Then, we check the assignment for the variable foo (returns bar).

Then, we check the registration for the variable bam. In strict mode, there is no bam variable in our scope (the global scope), so we will receive a reference error. In non-strict mode, it will assign and return yay.

Then, we will check if the function baz was registered in the current (global) scope and we will also receive a reference error.

### 4. During the second stage of execution how many scopes have been registered by the engine? Which segments of the code do they belong to? Please identify any variables/refs and which scope each belongs to?
Three scopes have been registered by the engine.

Global scope contains variable foo and function bar, as well as the variable bam if we are not in strict mode.

Bar scope contains variable foo and function baz and can also reference global scope variables and references. But, there are any conflicts between bar scope and global scope, bar scope variables/references will trump global scope.

Baz scope contains variable foo and can also reference bar scope and global scope variables and references. In case of conflicts, baz scope trumps bar scope trumps global scope.

### 5. When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.
The foo in the baz scope, declared via the argument passed in to the function, is the one being assigned a value of bam. When we execute the function baz, we are entering the scope of baz, and the more restrictive (innermost nested) scope trumps any conflicts in more general scopes. If we console logged foo within the function bar but outside of the baz function, foo would return 'baz.'

### 6. Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.
bam is never defined or registered in any scope as we are in strict mode. Variables in strict mode must be defined with var, let, or const, or within a function declaration, passed as arguments. If not in strict mode, bam would default to the global scope.

### 7. For each line, 16 through 19, what is the return value for each?
bar(); // reference error because bam is not defined. We are in strict mode.

foo; // "bar" because that is what it was assigned in the current (global) scope.

bam; // reference error because we are in strict mode and the variable was never declared.

baz(); // reference error because the function does not exist in our current (global) scope.