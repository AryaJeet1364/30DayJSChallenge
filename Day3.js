// Tasks/Activities

// Activity 1
// Task 1
let num1 = -34;
if(num1==0){
    console.log(`The number ${num1} is zero`);
}
else if(num1 > 0){
    console.log(`The number ${num1} is positive`);
}
else{
    console.log(`The number ${num1} is negative`);
}
// Task 2
let age = 24;
if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}

console.log();

// Activity 2
// Task 3
let num2 = 12;
let num3 = 45;
let num4 = 54;
let greatestnum = num2;
if(num2>num3){
    if(num2 < num4){
        greatestnum = num4;
    }
    else{
        greatestnum = num2;
    }
}
if(num3>num2){
    if(num3 < num4){
        greatestnum = num4;
    }
    else{
        greatestnum = num3;
    }
}
console.log(greatestnum);

console.log();

// Activity 3
// Task 4
function getDayOfWeek(number) {
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Enter b/w 1 to 7");
    }
}
getDayOfWeek(3);
// Task 5
function assignGrade(score) {
    switch (true) {
        case score >= 90:
            console.log('A');
            break;
        case score >= 80:
            console.log('B');
            break;
        case score >= 70:
            console.log('C');
            break;
        case score >= 60:
            console.log('D');
            break;
        default:
            console.log('F');
    }
}
assignGrade(85);

console.log();

// Activity 4
// Task 6
let num5 = 13;
const result = num5 % 2 === 0 ? "even" : "odd";
console.log(`The number ${num5} is ${result}.`);

console.log();

// Activity 5
// Task 7
let year = 2024;
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isLeap ? `${year} is a leap year.` : `${year} is not a leap year.`);

console.log();



// Feature Request
console.log("Feature Request");

// 1.
function checkNumber(num) {
  if (num < 0) {
    console.log(`${num} is negative.`);
  } else if (num > 0) {
    console.log(`${num} is positive.`);
  } else {
    console.log(`${num} is zero.`);
  }
}
// 2.
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote yet.");
  }
}
// 3.
function getDayOfWeek(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number");
  }
}
// 4. 
function assignGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("Grade: A");
      break;
    case score >= 80:
      console.log("Grade: B");
      break;
    case score >= 70:
      console.log("Grade: C");
      break;
    case score >= 60:
      console.log("Grade: D");
      break;
    default:
      console.log("Grade: F");
  }
}
// 5.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

console.log("1. Check Number:");
checkNumber(-5);
checkNumber(0);
checkNumber(10);

console.log("\n2. Voting Eligibility:");
checkVotingEligibility(16);
checkVotingEligibility(21);

console.log("\n3. Day of the Week:");
getDayOfWeek(3);
getDayOfWeek(7);

console.log("\n4. Grade Assignment:");
assignGrade(95);
assignGrade(72);

console.log("\n5. Leap Year Check:");
isLeapYear(2000);
isLeapYear(2023);