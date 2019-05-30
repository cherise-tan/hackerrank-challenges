# hackerrank-challenges
A collection of hackerrank challenges and their solutions

## 10 Days of JavaScript

#### Hello World
* Use ```console.log();``` to print out strings/variables etc.

#### Data Types
* Converting from a string to an int: ```parseInt(string);```
* Converting from a string to a float: ```parseFloat(string);```

#### Arithmetic Operators
* There are 3 types of operators:
  * Unary: ```a++```
  * Binary: ```a + b = c```
  * Ternary: ```a ? b: c``` (this is a conditional operator)

#### Functions
* Recursion: this is an extremely important algorithmic concept that involves splitting a problem into two parts: a BASE CASE and a RECURSIVE CASE
* The problem is divided into smaller subproblems which are then solved recursively until such time as they are small enough and meet some base case; once the base case is met, the solutions for each subproblem are combined and their result is the answer to the entire problem.
* If the base case is not met, the function's recursive case calls the function again with modified values. The code must be structured in such a way that the base case is reachable after some number of iterations.

Writing a function that returns n! (n factorial)
* 3! = 3 * 2 * 1
* Needs to be written with a RECURSIVE solution (see functions.js)

#### Let and Const
* var: scope is within the context wherever it was declared
  * global: if declared outside any function
  * local: if declared within a function
* let: scope is limited to the block/statement/expression in which it is used
* const: creates a read-only reference to a value; value cannot be re-assigned
