// let arr = [];
// console.log(arr);
// let arbitraryNumbers = [0, 1, 42, 24601, 1337];
// arbitraryNumbers.forEach((numb) => console.log(numb * 3));

// // Assignment 2.3
// let numbers = [];
// let smallNumbers = [];
// // create array with some numbers
// for (let i = 0; i < 10; i++) {
//   numbers.push(i * 3);
// }
// // Loop through the array of numbers
// numbers.forEach((number) => {
//   if (number < 16) {
//     smallNumbers.push(number);
//   }
// });
// console.log(smallNumbers);

// // <---------------ASSIGNMENT 2.4 ------------>
// let numbers = [];
// let n = 0;
// let sumNumbers = 0;
// while (n < 10) {
//   numbers.push(Math.floor(Math.random() * 100));
//   n++;
// }
// numbers.forEach((number) => {
//   sumNumbers = sumNumbers + number;
//   console.log("adding " + number + " to the total. New total is " + sumNumbers);
// });
// console.log("Sum of all numbers is " + sumNumbers);

// // <---------------ASSIGNMENT 2.5 ------------>
// let animals = ["dog", "cat", "elephant", "capybara", "ant"];
// animals.forEach((animal) => {
//   if (animal == "capybara") {
//     console.log(animal);
//   } else {
//     console.log("not a capybara");
//   }
// });

// // <---------------ASSIGNMENT 2.6 ------------>
// let animals = ["dog", "cat", "elephant", "capybara", "ant"];
// animals.splice(4, 1);
// console.log(animals);

// // <---------------ASSIGNMENT 2.7 ------------>
// let numbers = [];
// let n = 0;
// let largestNum = 0;
// while (n < 10) {
//   numbers.push(Math.floor(Math.random() * 100));
//   n++;
// }
// numbers.forEach((number) => {
//   if (number > largestNum) {
//     largestNum = number;
//   }
// });
// console.log(numbers);
// console.log("The largest number of " + numbers + " is " + largestNum);

// // <---------------ASSIGNMENT 2.8 ------------>
// let numbers = [];
// let copyNumbers = [];
// let n = 0;
// // create array of 10 random numbers between 0 and 99
// while (n < 10) {
//   numbers.push(Math.floor(Math.random() * 100));
//   n++;
// }
// numbers.forEach((number) => {
//   copyNumbers.push(number);
// });
// console.log(numbers);
// console.log(copyNumbers);

// <---------------ASSIGNMENT 2.9 ------------>
let numbers = [];
let n = 0;
// create array of 10 random numbers between 0 and 99
while (n < 10) {
  numbers.push(Math.floor(Math.random() * 100));
  n++;
}
console.log("array before removing elements: " + numbers);

let i = 0;
while (i < numbers.length) {
  numbers.pop(i);
  console.log(numbers);
}
console.log("array after removing elements: " + numbers);
