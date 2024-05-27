

# Array Properties and Methods in JavaScript

## Array Properties

### `length`
The `length` property of an array returns the number of elements in the array.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // 3
```

## Array Methods

### `push()`
Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let fruits = ['apple', 'banana'];
fruits.push('cherry'); // Adds 'cherry' to the end
console.log(fruits); // ['apple', 'banana', 'cherry']
```

### `pop()`
Removes the last element from an array and returns that element.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
let lastFruit = fruits.pop(); // Removes 'cherry'
console.log(fruits); // ['apple', 'banana']
console.log(lastFruit); // 'cherry'
```

### `shift()`
Removes the first element from an array and returns that element.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
let firstFruit = fruits.shift(); // Removes 'apple'
console.log(fruits); // ['banana', 'cherry']
console.log(firstFruit); // 'apple'
```

### `unshift()`
Adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
let fruits = ['banana', 'cherry'];
fruits.unshift('apple'); // Adds 'apple' to the beginning
console.log(fruits); // ['apple', 'banana', 'cherry']
```

### `indexOf()`
Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
let index = fruits.indexOf('banana'); // 1
console.log(index);
```

### `includes()`
Determines whether an array includes a certain element, returning `true` or `false`.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
let hasBanana = fruits.includes('banana'); // true
console.log(hasBanana);
```

### `slice()`
Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included).

```javascript
let fruits = ['apple', 'banana', 'cherry'];
let citrus = fruits.slice(1, 2); // ['banana']
console.log(citrus);
```

### `splice()`
Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'blueberry'); // Removes 'banana' and adds 'blueberry'
console.log(fruits); // ['apple', 'blueberry', 'cherry']
```

### `forEach()`
Executes a provided function once for each array element.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// 'apple'
// 'banana'
// 'cherry'
```

### `map()`
Creates a new array with the results of calling a provided function on every element in the calling array.

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [2, 4, 6]
```

### `filter()`
Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evens); // [2, 4]
```

### `reduce()`
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);
console.log(sum); // 10
```

### `join()`
Joins all elements of an array into a string and returns this string.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
let joined = fruits.join(', ');
console.log(joined); // 'apple, banana, cherry'
```

### `concat()`
Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```javascript
let fruits = ['apple', 'banana'];
let moreFruits = ['cherry', 'date'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'banana', 'cherry', 'date']
```

### `reverse()`
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
fruits.reverse();
console.log(fruits); // ['cherry', 'banana', 'apple']
```

### `sort()`
Sorts the elements of an array in place and returns the array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

```javascript
let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']
```

These array properties and methods provide powerful ways to manipulate and interact with arrays in JavaScript.
```