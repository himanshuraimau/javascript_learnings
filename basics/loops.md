```markdown
# Conditions

In JavaScript, conditional statements are used to perform different actions based on different conditions. The primary conditional statements are `if`, `else if`, and `else`.

## `if` Statement

The `if` statement executes a block of code if a specified condition evaluates to `true`.

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}
```

## `else` Statement

The `else` statement executes a block of code if the same condition is `false`.

```javascript
let age = 16;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

## `else if` Statement

The `else if` statement specifies a new condition to test if the first condition is `false`. It allows you to chain multiple conditions.

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```

## Example Combining `if`, `else if`, and `else`

```javascript
let temperature = 30;

if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a warm day.");
} else if (temperature >= 10 && temperature < 20) {
    console.log("It's a cool day.");
} else {
    console.log("It's a cold day.");
}
```

## Summary

- **`if`**: Executes a block of code if a specified condition is `true`.
- **`else if`**: Specifies a new condition to test if the first condition is `false`. Multiple `else if` statements can be chained together.
- **`else`**: Executes a block of code if none of the preceding conditions are `true`.

Using these control structures, you can create complex decision-making logic in your JavaScript programs.
```