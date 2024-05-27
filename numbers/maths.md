

### Basic Arithmetic Operations:
JavaScript supports basic arithmetic operations such as addition, subtraction, multiplication, and division using the `+`, `-`, `*`, and `/` operators respectively.

```javascript
let sum = 5 + 3; // Addition
let difference = 7 - 2; // Subtraction
let product = 4 * 6; // Multiplication
let quotient = 10 / 2; // Division
```

### Modulus Operator:
The modulus operator (`%`) returns the remainder of a division operation.

```javascript
let remainder = 10 % 3; // 1 (remainder of 10 divided by 3)
```

### Exponentiation:
JavaScript has an exponentiation operator (`**`) to raise a number to a power.

```javascript
let result = 2 ** 3; // 8 (2 raised to the power of 3)
```

### Mathematical Constants and Functions:
JavaScript's `Math` object provides various constants and functions for mathematical operations.

```javascript
// Constants
Math.PI; // π (3.14159...)
Math.E; // Euler's number (2.718...)

// Functions
Math.abs(-5); // Absolute value (5)
Math.sqrt(9); // Square root (3)
Math.pow(2, 3); // Exponential function (2 raised to the power of 3, i.e., 8)
Math.floor(4.9); // Round down to the nearest integer (4)
Math.ceil(4.1); // Round up to the nearest integer (5)
Math.round(4.5); // Round to the nearest integer (5)
Math.min(2, 5, 1); // Minimum value (1)
Math.max(2, 5, 1); // Maximum value (5)
Math.random(); // Random number between 0 and 1
```

### Trigonometric Functions:
JavaScript's `Math` object also provides trigonometric functions for angles expressed in radians.

```javascript
Math.sin(Math.PI / 2); // Sine of π/2 (1)
Math.cos(0); // Cosine of 0 (1)
Math.tan(Math.PI / 4); // Tangent of π/4 (1)
```



```javascript
// Math.abs(x): Returns the absolute (positive) value of a number x.
let absoluteValue = Math.abs(-5); // absoluteValue is 5

// Math.sqrt(x): Returns the square root of a non-negative number x.
let squareRoot = Math.sqrt(25); // squareRoot is 5

// Math.pow(x, y): Returns x raised to the power of y.
let power = Math.pow(2, 3); // power is 8

// Math.floor(x): Returns the largest integer less than or equal to x.
let floorValue = Math.floor(4.9); // floorValue is 4

// Math.ceil(x): Returns the smallest integer greater than or equal to x.
let ceilValue = Math.ceil(4.1); // ceilValue is 5

// Math.round(x): Returns the value of x rounded to the nearest integer.
let roundValue = Math.round(4.5); // roundValue is 5

// Math.min(x1, x2, ..., xn): Returns the smallest of zero or more numbers.
let minValue = Math.min(2, 5, 1); // minValue is 1

// Math.max(x1, x2, ..., xn): Returns the largest of zero or more numbers.
let maxValue = Math.max(2, 5, 1); // maxValue is 5

// Math.random(): Returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
let randomNumber = Math.random(); // randomNumber is between 0 and 1 (exclusive)

// Math.sin(x): Returns the sine of a number x, where x is in radians.
let sineValue = Math.sin(Math.PI / 2); // sineValue is 1

// Math.cos(x): Returns the cosine of a number x, where x is in radians.
let cosineValue = Math.cos(0); // cosineValue is 1

// Math.tan(x): Returns the tangent of a number x, where x is in radians.
let tangentValue = Math.tan(Math.PI / 4); // tangentValue is 1

console.log(absoluteValue, squareRoot, power, floorValue, ceilValue, roundValue, minValue, maxValue, randomNumber, sineValue, cosineValue, tangentValue);
```

These examples demonstrate the use of various methods provided by the `Math` object in JavaScript for performing mathematical operations.