// Tasks/Activities
console.log("Daily Tasks:");
console.log();

// Activity 1: Object Creation and Access
// Task 1
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
};
console.log("Task 1 - Book object:", book);

// Task 2
console.log("Task 2 - Title:", book.title, "Author:", book.author);

console.log();

// Activity 2: Object Methods
// Task 3
book.getInfo = function () {
  return `${this.title} by ${this.author}`;
};
console.log("Task 3 - Book info:", book.getInfo());

// Task 4
book.updateYear = function (newYear) {
  this.year = newYear;
};
book.updateYear(1950);
console.log("Task 4 - Updated book:", book);

console.log();

// Activity 3: Nested Objects
// Task 5
const library = {
  name: "City Library",
  books: [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ],
};
console.log("Task 5 - Library object:", library);

// Task 6
console.log("Task 6 - Library name:", library.name);
console.log("Book titles:");
library.books.forEach((book) => console.log(book.title));

console.log();

// Activity 4: The 'this' Keyword
// Task 7
book.getTitleAndYear = function () {
  return `${this.title} (${this.year})`;
};
console.log("Task 7 - Book title and year:", book.getTitleAndYear());

console.log();

// Activity 5: Object Iteration
// Task 8
console.log("Task 8 - Book properties (for...in loop):");
for (let prop in book) {
  if (typeof book[prop] !== "function") {
    console.log(`${prop}: ${book[prop]}`);
  }
}

// Task 9
console.log("Task 9 - Book properties (Object methods):");
console.log("Keys:", Object.keys(book));
console.log(
  "Values:",
  Object.values(book).filter((value) => typeof value !== "function")
);
