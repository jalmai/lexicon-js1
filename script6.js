let currentTemp = prompt("What is the current temperature?");
let minAcceptableTemp = 73;
let maxAcceptableTemp = 77;
let tempWithinRange = false;

function celsiusToFarenheits() {
  return (tempCelsius * 9) / 5 + 32;
}
function tempCheck() {
  if ((currentTemp >= minAcceptableTemp) & (currentTemp <= maxAcceptableTemp)) {
    return true;
  }
  return false;
}
var isTempOk = tempCheck();
console.log(isTempOk);
