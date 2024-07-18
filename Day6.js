// Tasks/Activities
console.log("Daily Tasks:");
console.log();

// Activity 1: Array Creation and Access
// Task 1
const numbers = [1, 2, 3, 4, 5];
console.log("Task 1 - Array of numbers:", numbers);

// Task 2
console.log(
  "Task 2 - First element:",
  numbers[0],
  "Last element:",
  numbers[numbers.length - 1]
);

console.log();

// Activity 2: Array Methods (Basic)
// Task 3
numbers.push(6);
console.log("Task 3 - After push:", numbers);

// Task 4
numbers.pop();
console.log("Task 4 - After pop:", numbers);

// Task 5
numbers.shift();
console.log("Task 5 - After shift:", numbers);

// Task 6
numbers.unshift(0);
console.log("Task 6 - After unshift:", numbers);

console.log();

// Activity 3: Array Methods (Intermediate)
// Task 7
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Task 7 - Doubled numbers:", doubledNumbers);

// Task 8
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Task 8 - Even numbers:", evenNumbers);

// Task 9
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Task 9 - Sum of numbers:", sum);

console.log();

// Activity 4: Array Iteration
// Task 10
console.log("Task 10 - Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Task 11
console.log("Task 11 - Using forEach method:");
numbers.forEach((num) => console.log(num));

console.log();

// Activity 5: Multi-dimensional Arrays
// Task 12
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Task 12 - Two-dimensional array:");
console.log(matrix);

// Task 13
console.log("Task 13 - Specific element from matrix:");
console.log("Element at row 1, column 2:", matrix[1][2]);
