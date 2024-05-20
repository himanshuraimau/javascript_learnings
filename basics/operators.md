

```markdown



In JavaScript, operators are used to perform operations on values and variables. They can be categorized into several types:

## Arithmetic Operators

- **Addition (`+`)**: Adds two numbers or concatenates strings.
- **Subtraction (`-`)**: Subtracts one number from another.
- **Multiplication (`*`)**: Multiplies two numbers.
- **Division (`/`)**: Divides one number by another.
- **Modulus (`%`)**: Returns the remainder of a division.
- **Exponentiation (`**`)**: Raises the first operand to the power of the second operand.
- **Increment (`++`)**: Increases an integer value by one.
- **Decrement (`--`)**: Decreases an integer value by one.

```javascript
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...
console.log(x % y); // 1
console.log(x ** y); // 1000
x++;
console.log(x); // 11
y--;
console.log(y); // 2
```

## Comparison Operators

- **Equal (`==`)**: Checks if two values are equal (type coercion).
- **Strict Equal (`===`)**: Checks if two values are equal and of the same type.
- **Not Equal (`!=`)**: Checks if two values are not equal (type coercion).
- **Strict Not Equal (`!==`)**: Checks if two values are not equal or not of the same type.
- **Greater Than (`>`)**: Checks if the left operand is greater than the right.
- **Less Than (`<`)**: Checks if the left operand is less than the right.
- **Greater Than or Equal (`>=`)**: Checks if the left operand is greater than or equal to the right.
- **Less Than or Equal (`<=`)**: Checks if the left operand is less than or equal to the right.

```javascript
let a = 5;
let b = '5';

console.log(a == b); // true
console.log(a === b); // false
console.log(a != b); // false
console.log(a !== b); // true
console.log(a > 3); // true
console.log(a < 10); // true
console.log(a >= 5); // true
console.log(a <= 5); // true
```

## Logical Operators

- **AND (`&&`)**: Returns true if both operands are true.
- **OR (`||`)**: Returns true if at least one operand is true.
- **NOT (`!`)**: Returns the opposite boolean value of the operand.

```javascript
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue); // false
```

## Assignment Operators

- **Assignment (`=`)**: Assigns a value to a variable.
- **Addition Assignment (`+=`)**: Adds the right operand to the left operand and assigns the result to the left operand.
- **Subtraction Assignment (`-=`)**: Subtracts the right operand from the left operand and assigns the result to the left operand.
- **Multiplication Assignment (`*=`)**: Multiplies the right operand with the left operand and assigns the result to the left operand.
- **Division Assignment (`/=`)**: Divides the left operand by the right operand and assigns the result to the left operand.
- **Modulus Assignment (`%=`)**: Takes modulus using two operands and assigns the result to the left operand.

```javascript
let c = 10;

c += 5; // c = c + 5
console.log(c); // 15
c -= 3; // c = c - 3
console.log(c); // 12
c *= 2; // c = c * 2
console.log(c); // 24
c /= 4; // c = c / 4
console.log(c); // 6
c %= 4; // c = c % 4
console.log(c); // 2
```

## Bitwise Operators

- **AND (`&`)**: Performs a bitwise AND operation.
- **OR (`|`)**: Performs a bitwise OR operation.
- **NOT (`~`)**: Performs a bitwise NOT operation.
- **XOR (`^`)**: Performs a bitwise XOR operation.
- **Left Shift (`<<`)**: Shifts bits to the left.
- **Right Shift (`>>`)**: Shifts bits to the right.
- **Unsigned Right Shift (`>>>`)**: Shifts bits to the right (unsigned).

```javascript
let d = 5; // 0101 in binary
let e = 3; // 0011 in binary

console.log(d & e); // 1 (0001 in binary)
console.log(d | e); // 7 (0111 in binary)
console.log(~d); // -6 (inverts bits: 1010 in binary)
console.log(d ^ e); // 6 (0110 in binary)
console.log(d << 1); // 10 (1010 in binary)
console.log(d >> 1); // 2 (0010 in binary)
console.log(d >>> 1); // 2 (0010 in binary)
```

## Other Operators

- **Conditional (Ternary) Operator (`? :`)**: Evaluates a condition and returns one value if true and another if false.

```javascript
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
```

- **Typeof Operator (`typeof`)**: Returns a string indicating the type of the unevaluated operand.

```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); //