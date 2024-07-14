// Activity 1
// Task 1
let num1 = 10;
let num2 = 20;
let ans1 = num1 + num2;
console.log(`${num1} + ${num2} = ${ans1}`);

// Task 2
let num3 = 30;
let num4 = 20;
let ans2 = num3 - num4;
console.log(`${num3} - ${num4} = ${ans2}`);

// Task 3
let num5 = 10;
let num6 = 5;
let ans3 = num5 * num6;
console.log(`${num5} * ${num6} = ${ans3}`);

// Task 4
let num7 = 10;
let num8 = 5;
let ans4 = num7 / num8;
console.log(`${num7} / ${num8} = ${ans4}`);

// Task 5
let num9 = 15;
let num10 = 7;
let ans5 = num9 % num10;
console.log(`${num9} % ${num10} = ${ans5}`);

console.log();

// Activity 2
// Task 6
let num11 = 35;
num11 += 15; // 35 + 15
console.log(`35 + 15 = ${num11}`);

// Task 7
let num12 = 35;
num12 -= 15; // 35 - 15
console.log(`35 - 15 = ${num12}`);

console.log();

// Activity 3
// Task 8
let num13 = 12;
let num14 = 15;
console.log(`${num13} > ${num14} is ${num13 > num14}`);
console.log(`${num13} < ${num14} is ${num13 < num14}`);

// Task 9
let num15 = 32;
let num16 = 35;
console.log(`${num15} >= ${num16} is ${num15 >= num16}`);
console.log(`${num15} <= ${num16} is ${num15 <= num16}`);

// Task 10
let num17 = 42;
let num18 = 42;
console.log(`${num17} == ${num18} is ${num17 == num18}`);
console.log(`${num17} === ${num18} is ${num17 === num18}`);

console.log();

// Activity 4
// Task 11
let num19 = 35;
let num20 = 36;
console.log(
  `${num19} == ${num20} && ${num19} === ${num20} is ${
    num19 == num20 && num19 === num20
  }`
);

// Task 12
console.log(
  `${num19} == ${num20} || ${num19} === ${num20} is ${
    num19 == num20 || num19 === num20
  }`
);

// Task 13
console.log(`!(${num19} == ${num20}) is ${!(num19 == num20)}`);


console.log();

// Activity 5
// Task 14
let num21 = -31;
console.log(`${num21} is ${num21 > 0 ? "positive" : "negative"}`);




console.log();
console.log();




// Feature Request
// 1.
// num1 = 10
// num2 = 20
console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`);
console.log(`Remainder: ${num1} % ${num2} = ${num1 % num2}`);

console.log();

// 2.
let a = 5;
let b = 10;

console.log(`a = ${a}, b = ${b}`);
console.log(`a < b: ${a < b}`);
console.log(`a > b: ${a > b}`);
console.log(`a <= b: ${a <= b}`);
console.log(`a >= b: ${a >= b}`);
console.log(`a === b: ${a === b}`);
console.log(`a !== b: ${a !== b}`);
console.log(`a < b AND a > 0: ${a < b && a > 0}`);
console.log(`a > b OR a > 0: ${a > b || a > 0}`);
console.log(`NOT (a < b): ${!(a < b)}`);

console.log();

// 3.

let number = -7;

let result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log(`The number ${number} is ${result}.`);