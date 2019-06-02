# hackerrank-challenges
A collection of hackerrank challenges and their solutions

## 10 Days of JavaScript

### Problems Solved
* Solve "Second Largest Number" problem using array + for-loop (arrays.js)
* Reverse string (error-handling.js)
* Sock merchant -> search array for pairs (sock-merchant.js)
* Counting valleys -> array + for-loop (counting-valleys.js)

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

#### Loops
* For: ```for(initialization; condition; finalExpression) { statements; }```
* While ```while(condition) { statements; }```
  * This executes the loop as long as the specified condition evaluates to TRUE
  * The condition is evaluated before executing the statement
* Do-While ```do { statements; } while (condition);```
  * This executes the loop until the specified condition evaluates to FALSE
  * The condition is evaluated after executing the statement, so the statement will always be executed at least once
* For-In ```for (var variable in object) { console.log(variable + "=" + object[variable]); }```
  * This iterates over each enumerable property (in this case named "variable") in an OBJECT, allowing statements to be executed for each distinct propety
* For-Of ```for (let variable of iterable) { statements }```
  * This iterates over iterable objects such as an Array/Map/Set/String/TypedArray/arguments object
  * It essential iterates over the VALUE of each distinct property in the structure, such as each letter in a word, or each element in an array

#### Arrays
* Create an array: ```var a = ['first', 'second'];```
* Access first item in an array: ```a[0];```
* Access last item in an array: ```a[a.length -1]```
* Loop over an array: ```a.forEach(function(element, index, array) {...})```
* Append to the end of an array: ```a.push('third');```
* Remove from the end of an array: ```let removed = a.shift();   console.log(removed);```
* Add to the front of an array: ```a.unshift('zero');```
* Find the index of an item in an array: ```a.indexOf('second');```
* Remove an item by index position: ```a.splice(index, numberToRemove);```
* Copy an array: ```let b = array.slice();```
* Sort an array: ```a.sort();``` -> this sorts in ascending order
  * Sort in descending order using a compare function: ```a.sort(function(x,y) { return x < y; });```
  * Sort in descending order using a compare arrow function: ```a.sort((x,y) => x < y);```
* Iterate over an array: ```for (let element of a) { console.log(element); }```
* Sum each value in an array ```a.reduce((accumulator, currentvalue) => accumulator + currentValue)```
  * The function's returned value is assigned to 'accumulator' -> it is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value
* Create a new array with the results of calling a provided function on every element in the calling array ```a.map(x => x*2)```

#### Try, Catch, and Finally (Error Handling)
* SYNTAX ERROR (parsing error)
  * Because JS is an interpreted language, this type of error occurs when the code is interpreted -> i.e. at compile time
  * When a syntax error occurs, only the code contained within the same THREAD as the syntax error is affected; independent code running in other threads will still be executed
  * Example: ```console.log("Hello"``` -> note ')' has been forgotten
* RUNTIME ERROR (exception)
  * This type of error occurs during execution (i.e. after compilation/interpretation)
  * Once a runtime error is encountered, an exception is THROWN in the hope that it will be CAUGHT by a subsequent section of code containing instructions on how to recover from the error
  * Much like syntax errors, these affect the threat in which they occurred, but allow other independent threads to continue normal execution
  * Example: ```function sum(a, b) {}    add(2,3)``` -> note 'add' is not defined
* LOGICAL ERROR
  * These are some of the most difficult errors to isolate because they cause the program to operate without terminating or crashing, but the operations they perform are not correct

##### TRY, CATCH and FINALLY
* The TRY block is the first step in error handling and is used for any block of code that is likely to raise an exception. It should contain 1+ statements to be executed, and is typically followed by at least one CATCH CLAUSE and/or the optional FINALLY CLAUSE.
* It has three forms:
  * TRY-CATCH: the 'catch' block immediately follows the 'try' block, and is only executed if an exception is thrown when executing code within the 'try block'
    * It contains statements specifying how to proceed and recover from the thrown exception
    * If no exception is thrown when executing the try block, the catch block is skipped
    * If any statement within the try block (including a function call to code outside of the block) throws an exception, control immediately shifts to the catch clause.
  * TRY-FINALLY
    * The finally block is optional. It executes after the try and catch blocks, but before any subsequent statements following these blocks
    * The finally block always executes, regardless of whether or not an exception was thrown or caught
  * TRY-CATCH-FINALLY
* An example:
  ```
  try {
      console.log(getElement(arr, 4));
  }
  catch (err) {
      console.log(err.message); // this will print out the error message
  }
  ```

##### Throw
* The THROW statement can be used to throw an exception. This can be done in two ways:
* throw value
  * Can throw an exception by following the keyword "throw" with some "value" that we wish to use for the exception being thrown
  * ```throw false;```
* throw new Error(customError)
  * Can throw the exception by following the keyword "throw" with "new Error(customError)", where "customError" is the value we want to use for the "message" property of the exception being thrown
  * ```throw new Error("boo error");```

#### JavaScript Objects
* Object: a collection of properties
* Property: an association between a 'name' (key) and a 'value'
  * We can access the property in multiple ways:
    * Dot notation: ```objectName.propertyName```
    * Bracket notation: ```objectName["propertyName"];```
* Adding a new property to an existing object: ```object.key3 = value3;```

#####Creating an object
* Using an Object Initialiser: this is a comma-separated list of 0+ property name-value pairs defining an object, enclosed in curly braces {}
  * new Object():
    ```
    var o = new Object();
    o.name1 = value1;
    o.name2 = value2;
    ```
  * Object.create()
    ```
    var x = {name1: value1, name2: value2};
    var o = Object.create(x);   // create a new object, based off 'x'
    o.name1 = newValue1;   // thiw will change the value of 'name1'
    ```
  * Initialiser notation: ```var o = {name1: value1, name2:value2}```
    * Creating object then adding properties using DOT notation:
      ```
      var o = {};
      o.name1 = value1;
      o.name2 = value2;
      ```
* Using a Constructor Function: creates an object in two steps
  * 1: Define the object type by writing a constructor function. The convention here is for the function's name to be in UpperCamelCase
    ```
    function Actor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    ```
  * 2: Use the new operator to create a new instance of the object
    ```
    var actor1 = new Actor('Julia', 'Roberts');
    ```
#### Classes

##### Functional Classes
* Using Functions:
  * 1: Define a normal JavaScript function
  * 2: Create an object using the "new" keyword
  * 3: Define properties and methods for a created object using the "this" keyword
    ```
    function Fruit (type) {
      this.type = type;
      this.color = 'unknown';
      this.getInformation = getFruitInformation;
    }

    function getFruitInformation() {
      return 'This ' + this.type + ' is ' + this.color + '.';
    }

    let lime = new Fruit('Mexican lime');
    lime.color = 'green';
    ```
    * NB the function 'getFruitInformation' can be defined internally (i.e. inside the 'Fruit' constructor function)
* The Prototype Property
  * The drawback of internally defining the "getInformation" function is that it recreates that function every time we create a new Fruit object
  * Fortunately, every function in JavaScript has something called a prototype property, which is empty by default
  * We can think of a function's prototype as an object blueprint; when we add methods and properties to the prototype, they are accessible to all instances of that function
  * This is especially useful for inheritance
  * Can add a function to our Constructor Function's Prototype like so:
    ```
    function Fruit (type) {
      this.type = type;
      this.color = 'unknown';
    }

    Fruit.prototype.getInformation = function() {
      return 'This ' + this.type + ' is ' + this.color + '.';
    }

    let lime = new Fruit('Mexican lime');
    lime.color = 'green';
    ```
* Using Object Literals
  * We can use object literals to define an object's properties and functions by initializing a variable with a comma-separated list of property-value pairs enclosed in curly braces
    ```
    let lime = {
      type: 'Mexican lime',
      color: 'green'
    }
    ```
* Singleton Class Using a Function
  * A SINGLETON class is a design pattern that restricts a class to a SINGLE instance
  * When we assign the value of ```new function() {...}``` to a variable, the following happens:
    * We define an anonymous constructor function
    * We invoke the anonymous constructor function with the "new" keyword
    ```
    let lime = new function() {
      this.type = 'Mexican lime';
      this.color = 'green';
      };
    }
    ```

##### Classes
* JavaScript classes are a means of more simply and clearly creating objects and dealing with inheritance
* Classes are defined in two ways:
  * CLASS DECLARATIONS: to declare a class, we use the "class" keyword and follow it with the class' name
    * Ideally we always write classes in TitleCase
    ```
    class Polygon {
      constructor(height, width){
        this.height = height;
        this.width = width;
      }
    }

    let p = new Polygon(1, 2);
    ```
    * An important distinction between FUNCTION declarations and CLASS declarations is that function declarations are hoisted (i.e. can be referenced before they're declared), but class declarations are not
    * This means we MUST first declare our class before attempting to access/reference it
  * CLASS EXPRESSIONS: these can also be used to define a class, and can be named or unnamed
    * The name given to a named class expression is local to the class' body
    * UNNAMED CLASS:
      ```
      let Polygon = class{
        constructor(height, width){
          this.height = height;
          this.width = width;
        }
      }

      let p = new Polygon(1, 2);
      ```
    * NAMED CLASS: ```let Polygon = class Polygon{...}```

##### The Constuctor Method
* This is a special method we use to create and initialise objects of a class
* A class can only have ONE special method with the name "constructor"; attempting to write a class containing >1 constructor will throw an error
* To implement INHERITANCE, we can use the "super" keyword in a constructor to call a parent class constructor

##### Prototype Methods
```
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(10, 10);
```

##### Static Methods
* Static methods are methods relevant to all instances of a class — not just any one instance
* These methods receive information from their arguments and not a class instance, which allows us to invoke a class' static methods without creating an instance of the class
* In fact, we actually can't call a static method on an instantiated class object (attempting to do so throws a TypeError).
* We define a class' static methods using the "static" keyword
* We typically use these methods to create utility functions for applications, as they can't be called on class objects.
```
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class will fail
console.log(p1.distance(p1, p2));
```

##### Inheritance
* In essence, this construct allows us to create an object prototype or class that's an extension of another object prototype or class
* A class inheriting from some other class (referred to as a superclass or parent class) is called a subclass (or child class)
* The subclass inherits the superclass' methods and behaviors, but it can also declare new ones or even override existing ones
```
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function() {
  return (this.w * this.h);
};

class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}
```

##### Subclassing with the "extends" keyword
* We use the "extends" keyword in class declarations or class expressions to create a child class (i.e., subclass)
```
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}
```
* We can also "extend" functional classes
```
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name, 'speaks.');
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();
```

##### Superclass Calls using the "super" Keyword
* We use the "super" keyword to call functions on an object's parent
```
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();
```

##### Extending an Object
* The ability to extend multiple classes from the same superclass (or model multiple object types after the same prototype) is powerful because it provides us with certain implied guarantees about the basic functionality of the subclasses; as extensions of the parent class, subclasses are guaranteed to (at minimum) have the superclass' fields, methods, and functions.

#### Template Literals
* Template literals (formerly known as template strings) are string literals that allow for embedded expressions
* Typically used to express strings spanning multiple lines or for string interpolation -> which allows us to create a template with 1+ placeholders for inserting variable text at a later time
* Template literals are wrapped in BACKTICK characters, rather than in ""/''
* A template literal can contain placeholders, which are preceded by a "$" and wrapped in curly braces ({})
  * E.g. in the template literal ``` `${expression}` ```, the 'expression' text between the placeholders is passed to a function.
    * The default function simply concatenates the template literal's parts into a single string
* Any time we see an expression preceding a template literal, we call the expression a "tag" and the template string a "tagged template literal"
  * In these instances, we call the tag expression (typically a function) with the processed template literal, which we can then manipulate before outputting the final string

##### Multi-Line String using Template Literals
```
console.log(`first line
second line`);
```

##### Expression Interpolation
```
const a = 2;
const b = 3;

console.log(`The sum of a and b is ${a + b}.
The product of a and b is ${a * b}.`);
```

##### Tagged Template Literals
* Tagged template literals allow us to use a function to modify the output of a template literal
* In this example:
  * The first argument contains an array of string literals
  * The subsequently processed arguments are the values of the substitution expressions
  * After processing the arguments, the function returns the manipulated string
  ```
  var a = 5;
  var b = 10;

  function foo(strings, ...values) {
      console.log("." + strings[0] + ".");
      console.log("." + strings[1] + ".");
      console.log("." + strings[2] + ".");
      console.log("." + strings[3] + ".");
      console.log(values[0]);
      console.log(values[1]);
      console.log(values[2]);
  }

  foo`Sum ${a + b}
  Product ${a * b}
  Division ${b / a}`;
  ```
* We can also return from tagged templates:
  ```
  var a = 5;
  var b = 10;

  function foo(strings, ...values) {
      let a = values[0];
      let b = values[1];

      return `Sum ${a + b}
  Product ${a * b}
  Division ${b / a}`;
  }

  console.log(foo`Num1 ${a + 10}
  Num2 ${b * 2}
  Num3 ${b / a}`);
  ```

#### Arrow Functions
* These expressions bind the "this" value while using less syntax than a typical function expression
* Arrow functions are always ANONYMOUS
* Some examples of using this syntax:
  ```
  const makeArray = (...values) => { return values };
  console.log('Array:', makeArray(1, 2, 3, 4));
  console.log('Array:', makeArray(1, 2, 3, 4, 5, 6));

  const getSum = (a, b) => { return a + b };
  console.log('1 + 2 =', getSum(1, 2));

  const greeting = 'Hello, World.';
  const capitalize = (myString) => { return myString.toUpperCase() };
  console.log(greeting, '=>', capitalize(greeting));
  ```

##### Sum the Elements of an Array
```
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce(function (a, b) {
  return a + b;
}, 0);
```
can be simplified to
```
const sum = arr.reduce((a, b) => { return a + b }, 0);
```
can be simplified to
```
const sum = arr.reduce((a, b) => a + b, 0);
```

##### Find the Length of Strings in an Array
```
const arr = ['first', 'second', 'third', 'fourth', 'fifth'];

const len = arr.map(function(s) { return s.length });
```
can be simplified to
```
const len = arr.map(s => s.length);
```

##### Find Array Elements Greater Than a Value
```
const arr = [1, 2, 3, 4, 5];

const greaterThan3 = arr.filter(function(a) {
    return a > 3;
});
```
can be simplified to
```
const greaterThan3 = arr.filter(a => a > 3);
```

#### Regular Expressions
* A Regular Expression, or RegEx, is a pattern used to match character combinations in a string
* In JavaScript, regular expressions are also objects
* Creating a Regular Expression
  * A regular expression consists of a pattern string and, potentially, a flag specifying further detail on how the pattern should be matched
  * We construct regular expressions by using regular expression literals or RegExp class objects

##### Regular Expression Patterns
* We generally construct RegEx patterns using the basic characters we wish to match (e.g., abc), or a combination of basic and special characters (e.g. ```ab\*c``` or ```(\d+)\.\d\*)```
* Regular Expression Literal
  * A regular expression literal is a RegEx pattern enclosed within forward slashes: ```const re = /ab+c/; ```
  * This RegEx matches the character "a", followed by 1+ instances of the character "b", followed by the character "c"
* RegExp Objects
  * We can write a regular expression string and pass it as an argument to the RegExp constructor: ```const re = new RegExp('ab+c');```

##### Flags
* To create a RegExp object, we use this syntax: ```new RegExp(pattern[, flags])```
* To create a regular expression literal, we use this syntax: ```/pattern/flags```
* If specified, flags can have any combination of the following values:
  * g: global match
  * i: ignore case
  * m: multiline -> treats beginning (^) and end (#) characters as working over multiple lines
  * u: unicode -> treat pattern as a sequence of unicode code points
  * y: sticky -> matches only from the index indicated by the lastIndex property of this regular expression in the target string

##### Special Characters in Regular Expressions
* Character Classes
  * This is not a class in the traditional sense, but rather a term that refers to a set of one or more characters that can be used to match a single character from some input string. Here are the basic forms:
    * Enclosed within square brackets. Specify the what you'd like your expression to match within square brackets; for example, [a-f] will match any lowercase a through f character.
    * Predefined: These consist of a backslash character (\) followed by a letter. The table below shows some predefined character classes and the characters they match.
    ```
    .	  The period matches any single character, except line terminators (e.g., a newline).
    \d	A single digit character (i.e., [0-9]).
    \D	A single non-digit character (i.e., [^0-9]).
    \w	A single alphanumeric word character, including the underscore (i.e., [A-Za-z0-9_]).
    \W	A single non-word character (i.e., [^A-Za-z0-9_]).
    \s	A single whitespace character. This includes space (), tab (\t), form feed, line feed, and other Unicode spaces.
    \S	A single non-whitespace character (i.e., [^\w]).
    ```
* Character Sets
  * The character set [abcd] will match any one character from the set {a, b, c, d}. This is equivalent to [a-d].
  * The character set [^abcd]: Matches anything other than the enclosed characters. This is equivalent to [^a-d].
* Alteration
  * We use the | symbol to match one thing or the other. For example, a|b matches either a or b.
* Boundaries
  ```
  ^	  Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.
  $	  Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.
  \b	A zero-width word boundary, such as between a letter and a space.
  \B	Matches a zero-width non-word boundary, such as between two letters or between two spaces.
  ```
* Grouping and back references
  * (a): Matches a and remembers the match. These are called capturing groups.
  * (?:a): Matches a but does not remember the match. These are called non-capturing groups.
  * \n: Here n is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression.
* Quantifiers
  * a*: Matches the preceding item a, 0 or more times.
  * a+: Matches the preceding item a, 1 or more times.
  * a?: Matches the preceding item a, 0 or 1 time.
  * a{n}: Here n is a positive integer. Matches exactly n occurrences of the preceding item a.
  * a{n, }: Here n is a positive integer. Matches at least n occurrences of the preceding item a.
  * a{n, m}: Here n and m are positive integers. Matches at least n and at most m occurrences of the preceding item a.
* Assertions
  * a(?=b): Matches a only if a is followed by b.
  * a(?!b): Matches a only if a is not followed by b.

##### Working with Regular Expressions
* Regular expressions are used with the RegExp methods:
  * test, exec
* and with the String methods:
  * match, search, split, replace

* The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
  ```
  // Test whether 'learn' is contained at the very beginning of a string

  var re = /^learn/;
  var str1 = 'learn regular expressions';

  console.log(re.test(str1));
  ```
* The exec() method executes a search for a match in a specified string. Returns a result array or null.
  ```
  // Match 'quick brown' followed by 'jumps', ignoring characters in between
  // Remember 'brown' and 'jumps', Ignore case

  var re = /quick\s(brown).+?(jumps)/ig;
  var str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
  var res = re.exec(str);

  // The result object contains following information:
  // 1. [0] is the full string of characters matched
  // 2. [1], ...[n] is the parenthesized substring matches, if any. The number of possible parenthesized substrings is unlimited.
  // 3. index is the 0-based index of the match in the string.
  // 4. input is the original string.

  console.log('string of characters matched = ' + res[0]);
  console.log('first parenthesized substring match = ' + res[1]);
  console.log('index of the match = ' + res.index);
  console.log('original string = ' + res.input);
  ```
* The match() method retrieves the matches when matching a string against a regular expression.
  ```
  // Find 'Chapter', followed by `$1$` or more numeric characters, followed by a decimal point, followed by a zero or more numeric characters, and use a flag to specify that the results are *case-insensitive*.

  var re = /see (chapter \d+(\.\d)*)/i;
  var str = 'For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3';

  console.log(str.match(re));
  ```
* The search() method executes a search for a match between a regular expression and this String object
  * If successful, search() returns the index of the first match of the regular expression inside the string. Otherwise, it returns -1.
  ```
  const re = /learn/;
  const str1 = 'Today, we\'ll learn about regular expressions.';
  console.log('A search for', re, 'returns', str1.search(re), '\n');
  ```
* The split() method splits a String object into an array of strings by separating the string into substrings
  * Separator specifies the character(s) to use for separating the string
  * The separator is treated as a string or a regular expression
  * If separator is omitted, the array returned contains one element consisting of the entire string
  * If separator is an empty string, str is converted to an array of characters.
    ```
    const name = 'Julia Roberts';
    const res = name.split(' ');

    console.log('The split array:', res);
    console.log('First Name:', res[0]);
    console.log('Last Name:', res[1]);
    ```
* The replace(pattern, replacement) method returns a new string where some (or all) occurrences of a matched "pattern" have been replaced with a "replacement" substring.
  * "pattern": This value can be a string or a RegExp object to match against the calling string.
  * "replacement": This value can be a substring to replace the match with, or it can be a function to invoke that generates the replacement substring.
    ```
    const re = /RegExp/;
    const myString = 'We\'re learning about RegExps.';
    const replacementString = 'Regular Expression';

    console.log(myString);
    console.log(myString.replace(re, replacementString));
    ```

#### Bitwise Operators
##### Binary Number Basics
* The binary (base-2) numeral system is a way to express numbers
* The number of symbols in a numeral system is called its "base" or "radix"
* We use the notation ```(?)b``` to discuss numbers with different radixes
  * '?' is the number; 'b' is the base
  * e.g. (1101)2 is the binary equivalent of the decimal number (13)10
* Each digit in a binary number is called a BIT

##### Base-10 (Decimel) to Base-2 (Binary) Conversions
* We use the following algorithm to convert a decimal number to a binary number:
  * Take the decimel integer, divide it by 2, and record the quotient (the number of times 2 divided the integer) and the remainder (the number of units left over from the division -> which will always be 0 or 1)
  * Repeat step 1 on the quotient until the quotient becomes 0
  * Look at the sequence of the remainders
    * The remainder from the first division operation corresponds to the binary's LEAST SIGNIFICANT BIT (LSB)
    * The remainder from the last division operation corresponds to the MOST SIGNIFICANT BIT (MSB)
    * To get our binary number, we simply need to concatenate these remainder bits from MOST to LEAST significant
      ```
      n   n/2   remainder   significance
      71  35    1            LEAST
      35  17    1
      17  8     1
      8   4     0
      4   2     0
      2   1     0
      1   0     1            MOST
      ```
      * (71)10 => (1000111)2

##### Base-2 to Base-10 Conversions
*
