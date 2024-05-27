
```markdown
# Common JavaScript String Methods

1. **length**: Returns the length of a string.
   ```javascript
   let str = "Hello";
   console.log(str.length); // 5
   ```

2. **charAt()**: Returns the character at a specified index.
   ```javascript
   let str = "Hello";
   console.log(str.charAt(1)); // "e"
   ```

3. **indexOf()**: Returns the index of the first occurrence of a specified value, or -1 if not found.
   ```javascript
   let str = "Hello, world!";
   console.log(str.indexOf("world")); // 7
   ```

4. **includes()**: Checks if a string contains a specified value.
   ```javascript
   let str = "Hello, world!";
   console.log(str.includes("world")); // true
   ```

5. **substring()**: Extracts characters from a string, between two specified indices.
   ```javascript
   let str = "Hello, world!";
   console.log(str.substring(0, 5)); // "Hello"
   ```

6. **slice()**: Extracts a part of a string and returns it as a new string.
   ```javascript
   let str = "Hello, world!";
   console.log(str.slice(0, 5)); // "Hello"
   ```

7. **toUpperCase()**: Converts a string to uppercase letters.
   ```javascript
   let str = "Hello";
   console.log(str.toUpperCase()); // "HELLO"
   ```

8. **toLowerCase()**: Converts a string to lowercase letters.
   ```javascript
   let str = "Hello";
   console.log(str.toLowerCase()); // "hello"
   ```

9. **replace()**: Replaces a specified value with another value in a string.
   ```javascript
   let str = "Hello, world!";
   console.log(str.replace("world", "JavaScript")); // "Hello, JavaScript!"
   ```

10. **split()**: Splits a string into an array of substrings.
    ```javascript
    let str = "Hello, world!";
    console.log(str.split(", ")); // ["Hello", "world!"]
    ```

11. **trim()**: Removes whitespace from both ends of a string.
    ```javascript
    let str = "   Hello, world!   ";
    console.log(str.trim()); // "Hello, world!"
    ```

12. **concat()**: Joins two or more strings.
    ```javascript
    let str1 = "Hello";
    let str2 = "world!";
    console.log(str1.concat(", ", str2)); // "Hello, world!"
    ```

13. **startsWith()**: Checks if a string starts with a specified value.
    ```javascript
    let str = "Hello, world!";
    console.log(str.startsWith("Hello")); // true
    ```

14. **endsWith()**: Checks if a string ends with a specified value.
    ```javascript
    let str = "Hello, world!";
    console.log(str.endsWith("world!")); // true
    ```



15. **lastIndexOf()**: Returns the index of the last occurrence of a specified value, or -1 if not found.
    ```javascript
    let str = "Hello, world! Hello!";
    console.log(str.lastIndexOf("Hello")); // 13
    ```

16. **repeat()**: Returns a new string with a specified number of copies of the original string.
    ```javascript
    let str = "Hello";
    console.log(str.repeat(3)); // "HelloHelloHello"
    ```

17. **match()**: Retrieves the matches when matching a string against a regular expression.
    ```javascript
    let str = "Hello, world!";
    console.log(str.match(/world/)); // ["world"]
    ```

18. **search()**: Searches a string for a match against a regular expression and returns the index of the match.
    ```javascript
    let str = "Hello, world!";
    console.log(str.search(/world/)); // 7
    ```

19. **replaceAll()**: Replaces all occurrences of a specified value with another value in a string.
    ```javascript
    let str = "Hello, world! Hello, everyone!";
    console.log(str.replaceAll("Hello", "Hi")); // "Hi, world! Hi, everyone!"
    ```

20. **localeCompare()**: Compares two strings in the current locale.
    ```javascript
    let str1 = "apple";
    let str2 = "banana";
    console.log(str1.localeCompare(str2)); // -1
    ```

21. **padStart()**: Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length. The padding is applied from the start.
    ```javascript
    let str = "5";
    console.log(str.padStart(3, "0")); // "005"
    ```

22. **padEnd()**: Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length. The padding is applied from the end.
    ```javascript
    let str = "5";
    console.log(str.padEnd(3, "0")); // "500"
    ```

23. **codePointAt()**: Returns a non-negative integer that is the Unicode code point value at the given position.
    ```javascript
    let str = "Hello";
    console.log(str.codePointAt(1)); // 101
    ```

24. **fromCharCode()**: Returns a string created from the specified sequence of UTF-16 code units.
    ```javascript
    console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
    ```

25. **normalize()**: Returns the Unicode Normalization Form of a given string.
    ```javascript
    let str = "e\u0301"; // "e" with an accent
    console.log(str.normalize("NFC")); // "é"
    ```

26. **valueOf()**: Returns the primitive value of a String object.
    ```javascript
    let str = new String("Hello");
    console.log(str.valueOf()); // "Hello"
    ```

27. **toString()**: Returns a string representing the specified object.
    ```javascript
    let str = new String("Hello");
    console.log(str.toString()); // "Hello"
    ```
```