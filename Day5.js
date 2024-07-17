// Tasks/Activities
console.log("Daily Tasks:");
console.log();

// Activity 1: Function Declaration
// Task 1
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}

// Task 2
function calculateSquare(number) {
  return number * number;
}

// Activity 2: Function Expression
// Task 3
const findMaximum = function (a, b) {
  const max = a > b ? a : b;
  console.log(`The maximum of ${a} and ${b} is ${max}.`);
  return max;
};

// Task 4
const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};

// Activity 3: Arrow Functions
// Task 5
const sumNumbers = (a, b) => a + b;

// Task 6
const containsCharacter = (str, char) => str.includes(char);

// Activity 4: Function Parameters and Default Values
// Task 7
function multiplyNumbers(a, b = 1) {
  return a * b;
}

// Task 8
function greetPerson(name, age = 30) {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Activity 5: Higher-Order Functions
// Task 9
function repeatFunction(func, times) {
  return function (value) {
    let result = value;
    for (let i = 0; i < times; i++) {
      result = func(result);
    }
    return result;
  };
}

// Task 10
function composeFunctions(func1, func2) {
  return function (value) {
    return func2(func1(value));
  };
}

// Testing the functions
console.log("Activity 1:");
checkEvenOdd(7);
console.log(`Square of 5: ${calculateSquare(5)}`);

console.log("\nActivity 2:");
findMaximum(10, 15);
console.log(`Concatenated string: ${concatenateStrings("Hello, ", "World!")}`);

console.log("\nActivity 3:");
console.log(`Sum of 3 and 4: ${sumNumbers(3, 4)}`);
console.log(`Does "Hello" contain "o"? ${containsCharacter("Hello", "o")}`);

console.log("\nActivity 4:");
console.log(`Product of 5 and 3: ${multiplyNumbers(5, 3)}`);
console.log(`Product of 5 (default second parameter): ${multiplyNumbers(5)}`);
console.log(greetPerson("Alice", 25));
console.log(greetPerson("Bob"));

console.log("\nActivity 5:");
const double = (x) => x * 2;
const square = (x) => x * x;
const doubleTwice = repeatFunction(double, 2);
console.log(`Double 5 twice: ${doubleTwice(5)}`);
const doubleAndSquare = composeFunctions(double, square);
console.log(`Double and then square 3: ${doubleAndSquare(3)}`);

// Feature Request
console.log("\nFeature Request:");

// 1. Even or Odd Function Script
function evenOrOddScript(number) {
  const result = number % 2 === 0 ? "even" : "odd";
  console.log(`${number} is ${result}.`);
}

// 2. Square Calculation Function Script
function squareCalculationScript(number) {
  const result = number * number;
  console.log(`The square of ${number} is ${result}.`);
  return result;
}

// 3. Concatenation Function Script
const concatenationScript = (str1, str2) => {
  const result = str1 + str2;
  console.log(`Concatenated string: ${result}`);
  return result;
};

// 4. Sum Calculation Arrow Function Script
const sumCalculationScript = (a, b) => {
  const sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}.`);
  return sum;
};

// 5. Higher-Order Function Script
function higherOrderFunctionScript(func, times) {
  return function (value) {
    let result = value;
    for (let i = 0; i < times; i++) {
      result = func(result);
      console.log(`After ${i + 1} application(s): ${result}`);
    }
    return result;
  };
}

// Testing Feature Request functions
console.log("1. Even or Odd Function Script:");
evenOrOddScript(7);

console.log("\n2. Square Calculation Function Script:");
squareCalculationScript(5);

console.log("\n3. Concatenation Function Script:");
concatenationScript("Hello, ", "World!");

console.log("\n4. Sum Calculation Arrow Function Script:");
sumCalculationScript(10, 15);

console.log("\n5. Higher-Order Function Script:");
const tripleFunction = (x) => x * 3;
const tripleThreeTimes = higherOrderFunctionScript(tripleFunction, 3);
tripleThreeTimes(2);
