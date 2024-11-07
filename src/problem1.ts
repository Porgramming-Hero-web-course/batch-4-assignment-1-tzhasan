// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
function sumArray(arr: number[]):number { 
 const sum = arr.reduce((a, b) => a + b, 0);
 return sum;
}
sumArray([1, 2, 3, 4, 5]);
