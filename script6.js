let minAcceptableTemp = 73;
let maxAcceptableTemp = 77;
let tempWithinRange = false;
let currentTemp;

while (!tempWithinRange) {
  currentTemp = farenheitToCelsius(prompt("What temperature is it (F)?"));
  tempCheck();
  alert(tempWithinRange);
}

function celsiusToFarenheit() {
  return (currentTemp * 9) / 5 + 32;
}
function farenheitToCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}
function tempCheck() {
  alert(currentTemp);
  if ((currentTemp >= minAcceptableTemp) & (currentTemp <= maxAcceptableTemp)) {
    tempWithinRange = true;
  } else {
    tempWithinRange = false;
  }
}
