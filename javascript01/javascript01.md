## The Birth of JavaScript

* Brendan Eich created JavaScript for Netscape Navigator in 1995.
* Initially called LiveScript, it was later renamed JavaScript.
* JavaScript is an interpreted language.
* Web browsers use built-in JavaScript engines to run code.
* Node.js is an interpreter for running JavaScript programs outside of browsers.
* Client-side programming uses JavaScript to make web pages interactive.
* Modern JavaScript frameworks like React and Angular are used for complex web applications.
* JavaScript can also be used for server-side programming.

## JavaScript Development Tools

* Online development environments:
    * JSFiddle
    * CodePen
    * JsBin
    * Plunker
* Code editors:
    * WebStorm
    * Visual Studio Code
    * Sublime Text
    * Notepad++

## Running JavaScript Code

* Node.js is a popular environment for writing server-side JavaScript applications.
* Modern browsers like Chrome and Firefox have built-in JavaScript engines.
* Developer tools (accessed by pressing F12 on Windows) provide features for debugging JavaScript:
    * Inspector: examines website's HTML elements.
    * JavaScript console: displays errors and allows running JavaScript commands.
    * Debugger: allows setting breakpoints and stepping through code execution.

*Sample code: Hello, World!*

```javascript
console.log("Hello, World!");
```

## HTML, JavaScript, and CSS

* HTML defines the structure of a web page.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My title</title>
</head>
<body>
    My content
</body>
</html>
```

* JavaScript adds interactivity to web pages.
* CSS styles the appearance of web pages.
* Combining these languages creates dynamic and visually appealing web experiences.

**Example: Changing Text with a Button Click**

* HTML: defines a button and a span element.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My title</title>
</head>
<body>
    My content
    <span id="mySpan">Empty</span>
    <button onclick="changeText()">Change Text</button>
</body>
</html>
```

* JavaScript: changes the text of the span element when the button is clicked.

```javascript
function changeText() {
  const mySpan = document.getElementById("mySpan");
  mySpan.textContent = "Hello World!";
}
```

* CSS: styles the span element with blue color, bold font, and increased size.

```css
.mySpan {
  color: blue;
  font-weight: bold;
  font-size: 1.2em;
}
```

## Variables in JavaScript

* Variables store data used in programs.

* **Naming:**
    * Variable names must start with a letter, underscore (_), or dollar sign ($).
    * Can contain letters, numbers, underscores, and dollar signs.
    * Case-sensitive (e.g., `age` and `Age` are different variables).

* **Declaring and Initializing:**
    * Use `let`, `const`, or `var` (avoid `var` for modern JavaScript) keywords.
    * Can optionally assign a value during declaration (initialization).

```javascript
let name = "Alice";  // Declares and initializes a variable
const PI = 3.14159;   // Declares a constant with a fixed value
```

* **Changing Variable Values:**
    * Use the assignment operator (`=`) to change a variable's value.

```javascript
name = "Bob";  // Assigns a new value to the `name` variable
```

* **Constants:**
    * Declared with `const`.
    * Values cannot be changed after assignment.

## Primitive Data Types in JavaScript

* JavaScript has several built-in data types to represent different kinds of data.

* **Primitive Data Types:**
    * Boolean: Represents logical values (true or false).
    * Number: Represents numeric values (integers, decimals).
    * BigInt: Represents arbitrarily large integers.
    * String: Represents sequences of characters (text).
    * undefined: Represents the absence of a value.
    * Symbol: A unique and immutable identifier.
    * null: Represents the intentional absence of an object value.

```javascript
let isTrue = true;          // Boolean
let age = 30;                // Number
let bigInt = 12345678901234567890n;  // BigInt
let message = "Hello World!";  // String
let notAssigned;             // undefined
let uniqueSymbol = Symbol("unique");  // Symbol
let noObject = null;          // null
```

## Scope (blocks, shadowing)

* **Scope:**
    * The visibility of variables within different code blocks.
    * Block-scoped variables (using `let` or `const`) are only accessible within their block.
    * Function-scoped variables (using `var`) are accessible throughout the function.
    * Shadowing: A variable declared within a block can hide a variable with the same name in an outer scope.

```javascript
if (true) {
  let x = 10;  // Block-scoped variable
}

console.log(x); // This line will cause an error (x is not accessible here)

let x = "outer";  // Function-scoped variable

function myFunction() {
  let x = "inner";  // Shadowing the outer variable
  console.log(x); // This will print "inner"
}

myFunction();
console.log(x); // This will print "outer" (original value)
```

## Type Coercion (Implicit Conversions)

* JavaScript can automatically convert values from one type to another in certain situations.
* This can sometimes lead to unexpected behavior.

* **Examples of Type Coercion:**

    * **Number to String:**
        * Adding a number to a string concatenates them into a string.

```javascript
let num = 10;
let str = "hello";
let combined = num + str;  // Coerces num to string ("10hello")
console.log(combined);
```

* **String to Number:**
    * JavaScript attempts to convert a string to a number before performing mathematical operations.

```javascript
let numStr = "20";
let result = numStr * 2;  // Coerces numStr to number (40)
console.log(result);
```

* **Boolean to Number:**
    * `true` is converted to 1, `false` to 0.

```javascript
let truthy = true;
let falsy = false;
let added = truthy + falsy;  // Coerces truthy to 1, falsy to 0 (1)
console.log(added);
```

* **null and undefined:**
    * In some cases, `null` and `undefined` are treated as numeric values (usually 0).

```javascript
let val1 = null;
let val2 = undefined;
let sum = val1 + val2;  // Coerces both to 0 (0)
console.log(sum);
```

* It's important to be aware of type coercion to avoid unexpected results in your JavaScript code.

## Complex Data Types in JavaScript

* JavaScript offers complex data types to store collections of data.

* **Objects:**
    * Unordered collections of key-value pairs.
    * Keys can be strings or symbols, values can be any data type.

```javascript
let person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person.name);  // Accessing a property by key
```

* **Arrays:**
    * Ordered collections of items.
    * Items can be of any data type, including other arrays or objects.

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]);  // Accessing an element by index (zero-based)
```

## Array Properties and Methods

* Arrays provide built-in properties and methods for working with their content.

* **Properties:**
  * `length`: Gets the number of elements in the array.

```javascript
let fruits = ["apple", "banana", "orange"];
let numFruits = fruits.length;  // numFruits will be 3
console.log(numFruits);
```

* **Methods:**
  * `indexOf`: Searches for an element in the array and returns its first occurrence's index.
    * Returns -1 if the element is not found.

```javascript
let vegetables = ["potato", "carrot", "tomato", "carrot"];
let carrotIndex = vegetables.indexOf("carrot");  // carrotIndex will be 1
console.log(carrotIndex);

let missingItem = vegetables.indexOf("broccoli");  // missingItem will be -1
console.log(missingItem);
```

## More Array Methods in JavaScript

* Arrays offer various methods for adding, removing, rearranging, and extracting elements.

* **Modifying Arrays:**
  * `push`: Adds one or more elements to the end of the array and returns the new length.

```javascript
let numbers = [1, 2, 3];
numbers.push(4, 5);  // Adding elements to the end
console.log(numbers);  // [1, 2, 3, 4, 5]
```

* `unshift`: Adds one or more elements to the beginning of the array and returns the new length.

```javascript
numbers.unshift(0);  // Adding elements to the beginning
console.log(numbers);  // [0, 1, 2, 3, 4, 5]
```

* `pop`: Removes the last element from the array and returns it.

```javascript
let removedElement = numbers.pop();  // Removing and storing the last element
console.log(removedElement);  // 5
console.log(numbers);  // [0, 1, 2, 3, 4]
```

* `shift`: Removes the first element from the array and returns it.

```javascript
removedElement = numbers.shift();  // Removing and storing the first element
console.log(removedElement);  // 0
console.log(numbers);  // [1, 2, 3, 4]
```

* **Rearranging Arrays:**
  * `reverse`: Reverses the order of elements in the original array.

```javascript
let colors = ["red", "green", "blue"];
colors.reverse();
console.log(colors);  // ["blue", "green", "red"]
```

* **Extracting Sub-arrays:**
  * `slice`: Extracts a section of the array and returns a new array.
    * Takes two arguments (start index, end index - non-inclusive).

```javascript
let letters = ["a", "b", "c", "d", "e"];
let subArray = letters.slice(1, 4);  // Extracts elements from index 1 (inclusive) to 4 (exclusive)
console.log(subArray);  // ["b", "c", "d"]
```

* **Merging Arrays:**
  * `concat`: Merges two or more arrays and returns a new array containing all elements.

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray);  // [1, 2, 3, 4, 5, 6]
```

## Comments in JavaScript

* Comments are lines of code ignored by the JavaScript engine.
* Used to explain code functionality or improve readability.

* **Single-line Comments:**
    * Start with `//`.

```javascript
// This is a single-line comment
```

* **Multi-line Comments:**
    * Enclosed within `/*` and `*/`.

```javascript
/* This is a multi-line comment
that can span multiple lines */
```

* **Documentation and Code Toggling:**
    * Used to create detailed documentation within code.
    * Some tools allow collapsing comment sections for better code organization.

```javascript
/**
 * This function calculates the area of a circle.
 * @param {number} radius The radius of the circle.
 * @returns {number} The area of the circle.
 */
function calculateArea(radius) {
  // ... function implementation
}
```










## Scope (hoisting)

* **Scope:**
    * The visibility of variables and functions within different code blocks.

* **Block Scope (let and const):**
    * Variables declared with `let` or `const` are only accessible within the block they are declared in (e.g., `if` statement, `for` loop).

```javascript
if (true) {
  let x = 10;
}

console.log(x); // This line will cause an error (x is not accessible here)
```

* **Function Scope (var):**
    * Variables declared with `var` (avoid in modern JavaScript) are accessible throughout the function they are declared in, even if declared after their usage.

```javascript
function myFunction() {
  // This is bad practice, can lead to unexpected behavior
  console.log(y);  // y is accessible here even though declared below
  var y = 20;
}

myFunction();
```

* **Hoisting:**
    * A specific behavior of `var` declarations.
    * `var` declarations are hoisted to the top of their scope (function or global scope).
    * This means you can access a `var` variable before it's declared in the code.
    * Can lead to unexpected results if not used carefully.

```javascript
console.log(x);  // This will work (hoisting)
var x = 10;
```

* **Best Practices:**
    * Use `let` or `const` for variable declarations to avoid confusion and potential errors.
    * Be mindful of hoisting behavior if using `var`.


