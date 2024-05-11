// What is array in js?
// An array is a collection of elements that can be of different types.
// It is a data structure that contains a group of elements.
// An array is used to store multiple values in a single variable.
// It is a collection of similar data types.

// How to create an array in js?
a= [1,2,3,4,5,6,7,8,9,10]
console.log(a)
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// How to access elements of an array in js?
console.log(a[0]) // Output: 1
console.log(a[1]) // Output: 2

// How to update elements of an array in js?
a[0]= 0
console.log(a) // Output: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// How to add elements to an array in js?
a.push(11)
console.log(a) // Output: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// How to remove elements from an array in js?
a.pop()
console.log(a) // Output: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// How to find the length of an array in js?
console.log(a.length) // Output: 10

// How to iterate over an array in js?
for (let i=0; i<a.length; i++){
    console.log(a[i])
}

// How to find the sum of elements of an array in js?
let sum=0
for (let i=0; i<a.length; i++){
    sum+=a[i]
}

console.log(sum) // Output: 54

// Length of an array

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

//Increasing the length
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

//Decreasing the length
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2



