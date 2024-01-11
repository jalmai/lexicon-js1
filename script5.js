let num1 = prompt("Ange första numret");
let num2 = prompt("Ange andra numret");

let calculate = prompt("Ange +, -,* eller /");
if (calculate == "+") {
  console.log(parseInt(num1) + parseInt(num2));
} else if (calculate == "-") {
  console.log(parseInt(num1) - parseInt(num2));
} else if (calculate == "/") {
  console.log(parseInt(num1) / parseInt(num2));
} else if (calculate == "*") {
  console.log(parseInt(num1) * parseInt(num2));
} else {
  console.log("Kan inte identifiera ett korrekt räknesätt");
}
