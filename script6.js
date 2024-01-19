// greeting();
//greetingName("Kalle");
//addNumbers(12, 12);
//divideNumbers(12, 0);
function greeting() {
  alert("Hello there my friend");
}
function greetingName(name) {
  alert("Hello there my friend! You must be" + name + "!");
}
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}
function divideNumbers(num1, num2) {
  try {
    if (isNaN(num1)) throw "First input is not a number";
    if (isNaN(num2)) throw "Second input is not a number";
    if (num1 === 0) throw "First number is 0. Unable to divide by 0.";
    if (num2 === 0) throw "Second number is 0. Unable to divide by 0.";
  } catch (err) {
    console.log(err);
  }

  // Create a function that takes two numbers as arguments and returns the quotient of those numbers. Save that to variable and log it to the console. Remember that you can't divide with zero. So a check must be than in order to prevent the calculation if you are trying to divide by zero. Log an error message to the console if that happens.
}
function area() {
  // Create a function that takes a length and a width of an imaginary box as arguments and return the area of that box. Log a message to the console that describes the area of the box.
}
function greetingFullName() {
  // Create a function that takes a first name and a last name as arguments. Return a template literals that says: "Hello [firstName] [lastName]! How are you doing?"
}
function kmMilesConv() {
  // Create a function that takes a distance in kilometres as an arguments and returns the distanse in miles. (The American kind of miles). Save to a variable and log a description of the conversion to the console.
}
function celsiusFarenheitConv() {
  // Create a function that takes a celsius temperature as an argument and returns the temperature in farenheit. Log the result message to the console.
}
function meanValueArray() {
  // Create a function that takes an array of numbers as an argument. Return the mean value of all those numbers, save it and log it to the console.
}
function checkAge() {
  // Create a function that takes an age as an argument.
  // Check the age and return one of the following messages.
  // - 0 - 14 "Get out of here!"
  // - 15 - 17: "Sorry, you are not old enough"
  // - 18-19: "Sorry, you must be atleast 20. Why don't you try a bar instead?"
  // - 20-80: "Thank you! Welcome!"
  // - 80+ I'm sorry, where is your caretaker?
}
function sumOfArray() {
  // Create a function that takes an array of 10 different numbers as an argument. Calculate the total sum of all the numbers in the array and return that value. Log it to the console.
}
function listSkills() {
  //     Create an person object that has the following attributes:
  // - name
  // - age
  // - city
  // - skills
  // The skills attribute should be an array that contains strings of different skills, like: "Pokemon Master", "Kung Fu Legend", "Football Ninja" or any other skill. At least five of them.
}
