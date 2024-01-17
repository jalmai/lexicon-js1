let currentTemp;
let minAcceptableTemp = 73;
let maxAcceptableTemp = 77;
let tempWithinRange = false;

function celsiusToFarenheit() {
  return (currentTemp * 9) / 5 + 32;
}
function farenheitToCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}
function tempCheck() {
  if ((currentTemp >= minAcceptableTemp) & (currentTemp <= maxAcceptableTemp)) {
    return true;
  }
  return false;
}
var isTempOk = tempCheck();
console.log(isTempOk);
