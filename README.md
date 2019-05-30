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

#### Conditional Statements: IF-ELSE
* Equality (==) will convert the operands if they are not of the same type
  * Same for Inequality (!=)
* Strict Equality (===) requires operands to be of the same type
  * Same for Strict Inequality (!==)
* Ternary operators: ```a ? b: c```
  * This is a shortcut for the 'if' statement -> "?" means "then"; ":" means "else"
  * If 'a' is true 'b' will be executed, otherwise 'c' will be executed

#### Conditional Statements: SWITCH
* A switch statement allows a program to evaluate an expression by attempting to match the expression's value to a case label. If a match is found, the program jumps to the statement(s) associated with the matched label and continues executing at that point
  * The program first looks for a case clause with a label matching the value of "expression", then executes the associated statements.
  * If no matching label is found, the program looks for the optional default clause
  * If no default clause is found, the program continues executing after the end of the switch statement.
    * The DEFAULT clause, by convention, is always listed last
* A switch statement looks like this:
  ```
  switch (expression) {
    case label1:
        statement1;
        break;
    case label2:
        statement2;
        break;
    default:
        statement;
  }
  ```
* The BREAK statement ensures that the program breaks out of the switch statement once the statements associated with a matched case are executed
  * If the break statement is omitted, the program continues executing the next statement in the switch statement — even if its case label doesn't match "expression"

* A switch statement can have multiple criteria for each case:
  ```
  switch (n) {
      case 2:
      case 4:
      case 6:
          console.log("A");
          break;
      case 3:
      case 5:
      case 7:
          console.log("B");
          break;
      default:
          console.log("C");
  }
  ```

#### String Basics
* ```string.length(str)``` denotes the number of characters in the string
* ```String(n)``` will create a new string (where 'n' is the value we want to turn into a string)
* ```string.charAt(i)``` will return the character at a specified index
* ```string1.concat(string2)``` will return a new string consisting of the calling string "string1" and the string which was passed as an argument "string2"
* ```string.includes(c)``` returns a boolean denoting whether a string passed as an argument exists within the calling string
* ```string.endsWith(c)``` returns a boolean denoting whether the calling string ends with the characters of the string passed as an argument
* ```string.indexOf(c)``` returns an integer denoting the index within the calling string of the FIRST occurrence of a given argument  
  * If the argument isn't found in the string/no argument was passed to the function -> returns "-1"
  * If an int was passed as a second argument, it will start searching the string from the index denoted by the integer: e.g. ```string.indexOf("c", 6)```
* ```string.lastIndexOf(c)``` returns an integer denoting the index within the calling string of the LAST occurrence of a given argument
* ```string.match(RegExp)``` is used to match a regular expression passed as an argument against the calling string
  * If a match is found, it returns an object with 3 properties: the matched substring, the index it was found at, and the input (i.e. the initial string)
  * If no match is found, it returns null
  * E.g. ```string.match("[a-z]+")```
* ```string.normalize(arg)``` returns a string containing the Unicode Normalization Form of the calling string's value
  * The argument must be one of the following: NFC/NFD/NKFC/NFKD
* ```string.repeat(int)``` returns a string consisting of the elements of the calling string object repeated some number of times (given as an integer argument)
  * If no argument/0 argument is given, it returns an empty string
* ```string.replace("a", "b")``` finds a match between a regular expression and a string, then returns a string where the first matched substring is replaced with a new substring
  * If no match is found, the returned string is the same as the original string
* ```string.search(str)``` executes the search for a match between a regular expression and a specified string, then returns the index of the first character of the first match
* ```string.slice(i, j)``` extracts a section of a string and returns it as a new string
  * If no arguments are passed the string, it returns the entire string
  * If one integer argument "i" is passed to the function, it returns a substring starting at index "i" and ending at the end of the string
  * If two integer arguments "i" & "j" are passed to the function, it returns a substring starting at index "i" and ending at "j - 1"
* ```string.split(arg)``` splits a string object into an array of strings by separating the string into substrings
  * If no argument is given, it returns an array containing the original string
  * If an empty string "" is passed as an argument, it returns an array of the string's individual letters
  * If a string consisting of 1+ letters is passed as an argument, it splits the string at each occurence of that string, and returns an array of the split substrings
    * e.g. ```string.split(" ")``` will split words into separate arrays
* ```string.startsWith(char)``` returns a boolean denoting whether a string begins with the characters of another string passed as an argument
* ```string.substr(arg)``` SEE STRING.SLICE()
* ```string.substring(arg)``` SEE STRING.SLICE()
* ```string.toLowerCase()``` converts string to lowercase
* ```string.toUpperCase()``` converts string to uppercase
* ```string.trim()``` returns the string with the white space trimmed from its beginning and end
* ```string.trimLeft()``` returns the string with the white space trimmed from its left side
* ```string.trimRight()``` returns the string with the white space trimmed from its right side
