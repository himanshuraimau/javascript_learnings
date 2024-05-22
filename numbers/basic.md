

```markdown
1. **What are Numbers in JavaScript?**: Numbers in JavaScript are a primitive data type used to represent numeric values. They include integers, floating-point numbers, and special numeric values such as `NaN` (Not-a-Number) and `Infinity`.

2. **Numeric types in JavaScript (integers and floating-point numbers)**: JavaScript primarily has two numeric types: integers and floating-point numbers. Integers represent whole numbers, while floating-point numbers represent decimal numbers. JavaScript does not have separate data types for integers and floating-point numbers; both are represented by the `Number` type.

3. **Arithmetic operations (+, -, *, /, %)**: JavaScript supports various arithmetic operations:
   - Addition (+)
   - Subtraction (-)
   - Multiplication (*)
   - Division (/)
   - Modulus (%) - returns the remainder of a division operation.

4. **Number Methods**: JavaScript provides several methods for performing operations on numbers:
   - `toString()`: Converts a number to a string.
   - `toFixed()`: Formats a number using fixed-point notation.
   - `toPrecision()`: Formats a number to a specified precision.
   - `parseInt()`: Parses a string and returns an integer.
   - `parseFloat()`: Parses a string and returns a floating-point number.
   - `isNaN()`: Checks if a value is NaN (Not-a-Number).
   - `isFinite()`: Checks if a value is a finite number.
   - `Math.max()`: Returns the largest of zero or more numbers.
   - `Math.min()`: Returns the smallest of zero or more numbers.
   - `Math.round()`: Rounds a number to the nearest integer.
   - `Math.floor()`: Rounds a number down to the nearest integer.
   - `Math.ceil()`: Rounds a number up to the nearest integer.

These methods are useful for various mathematical operations and conversions in JavaScript.

1. **toString()**: Converts a number to a string.
   ```javascript
   let num = 123;
   let str = num.toString(); // "123"
   ```

2. **toFixed()**: Formats a number using fixed-point notation with a specified number of digits after the decimal point.
   ```javascript
   let num = 3.14159;
   let fixedNum = num.toFixed(2); // "3.14"
   ```

3. **toPrecision()**: Formats a number to a specified precision.
   ```javascript
   let num = 123.456;
   let precisionNum = num.toPrecision(4); // "123.5"
   ```

4. **parseInt()**: Parses a string and returns an integer.
   ```javascript
   let str = "123";
   let num = parseInt(str); // 123
   ```

5. **parseFloat()**: Parses a string and returns a floating-point number.
   ```javascript
   let str = "3.14";
   let num = parseFloat(str); // 3.14
   ```

6. **isNaN()**: Checks if a value is NaN (Not-a-Number).
   ```javascript
   isNaN(123); // false
   isNaN("hello"); // true
   ```

7. **isFinite()**: Checks if a value is a finite number.
   ```javascript
   isFinite(123); // true
   isFinite(Infinity); // false
   ```

8. **Math.max()**: Returns the largest of zero or more numbers.
   ```javascript
   Math.max(5, 10, 3); // 10
   ```

9. **Math.min()**: Returns the smallest of zero or more numbers.
   ```javascript
   Math.min(5, 10, 3); // 3
   ```

10. **Math.round()**: Rounds a number to the nearest integer.
    ```javascript
    Math.round(3.5); // 4
    ```

11. **Math.floor()**: Rounds a number down to the nearest integer.
    ```javascript
    Math.floor(3.9); // 3
    ```

12. **Math.ceil()**: Rounds a number up to the nearest integer.
    ```javascript
    Math.ceil(3.1); // 4
    ```
```

