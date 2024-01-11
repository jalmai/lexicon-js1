// ------ ASSIGNMENT3 - ARRAYS ------
const numbers = [2, 6, 12, 7, 22, 35];
// ---3.1 ---
let number1 = numbers[0];
console.log(number1);
// ---3.2 ---
let number2 = numbers.slice(-1)[0];
console.log(number2);
// ---3.3 ---
let number3 = numbers[3];
console.log(number3);

// ---3.4 ---
let secondNumber = numbers[1];
let fifthNumber = numbers[4];
let newArray = [secondNumber, fifthNumber];
console.log(newArray);

// ---3.5 ---
let lengthNumbers = numbers.length;
console.log(lengthNumbers);

// ---3.6 ---
let newVar = numbers.push(12);
console.log(newVar);
// array.push() returns new length of array

// ---3.7 ---
let newVar2 = numbers.unshift(23);
console.log(newVar);
// array.unshift() returns new length of array
let newVar3 = numbers.pop(-1);
console.log(newVar3);
//array.pop returns removed value
