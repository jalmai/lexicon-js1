// let arr = [];
// console.log(arr);
// let arbitraryNumbers = [0, 1, 42, 24601, 1337];
// arbitraryNumbers.forEach((numb) => console.log(numb * 3));
let numbers = [];
let smallNumbers = [];
// create array with some numbers
for (let i = 0; i < 10; i++) {
  numbers.push(i * 3);
}
// Loop through the array of numbers
numbers.forEach((number) => {
  if (number < 16) {
    smallNumbers.push(number);
  }
});
console.log(smallNumbers);
