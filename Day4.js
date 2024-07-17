// Tasks/Activities
console.log("Daily Tasks:");
console.log();

// Activity 1: For Loop
// Task 1
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log();

// Task 2
console.log("Multiplication table of 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log();

// Activity 2: While Loop
// Task 3
let sum = 0;
let num = 1;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(`Sum of numbers from 1 to 10: ${sum}`);

console.log();

// Task 4
console.log("Numbers from 10 to 1:");
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

console.log();

// Activity 3: Do...While Loop
// Task 5
console.log("Numbers from 1 to 5:");
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

console.log();

// Task 6
let factorial = 1;
let n = 5; // Calculate factorial of 5
let j = 1;
do {
  factorial *= j;
  j++;
} while (j <= n);
console.log(`Factorial of ${n} is: ${factorial}`);

console.log();

// Activity 4: Nested Loops
// Task 7
console.log("Pattern using nested for loops:");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j === 1 ? "* " : "* ";
  }
  console.log(row);
}

console.log();

// Activity 5: Loop Control Statements
// Task 8
console.log("Numbers from 1 to 10 (skipping 5):");
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

console.log();

// Task 9
console.log("Numbers from 1 to 10 (stopping at 7):");
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

console.log();

// Feature Request
console.log("Feature Request:");
console.log();

// 1. Number Printing Script
function printNumbers() {
  console.log("Numbers from 1 to 10 (for loop):");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  console.log("\nNumbers from 1 to 10 (while loop):");
  let j = 1;
  while (j <= 10) {
    console.log(j);
    j++;
  }
}

// 2. Multiplication Table Script
function printMultiplicationTable() {
  console.log("Multiplication table of 5:");
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}

// 3. Pattern Printing Script
function printStarPattern() {
  console.log("Star pattern:");
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// 4. Sum Calculation Script
function calculateSum() {
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum += i;
    i++;
  }
  console.log(`Sum of numbers from 1 to 10: ${sum}`);
}

// 5. Factorial Calculation Script
function calculateFactorial(n) {
  let factorial = 1;
  let i = 1;
  do {
    factorial *= i;
    i++;
  } while (i <= n);
  console.log(`Factorial of ${n} is: ${factorial}`);
}

// Calling the feature request functions
console.log("1. Number Printing Script:");
printNumbers();

console.log("2. Multiplication Table Script:");
printMultiplicationTable();

console.log("3. Pattern Printing Script:");
printStarPattern();

console.log("4. Sum Calculation Script:");
calculateSum();

console.log("5. Factorial Calculation Script:");
calculateFactorial(5);
