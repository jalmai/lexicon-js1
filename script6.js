let minAcceptableTemp = 73;
let maxAcceptableTemp = 77;
let tempWithinRange = false;
let currentTemp;

while (!tempWithinRange) {
  currentTemp = farenheitToCelsius(prompt("What temperature do you want (F)?"));
  tempCheck();
  if (!tempWithinRange) {
    alert(
      "This is not an ideal temperature. Please pick a temperature between " +
        celsiusToFarenheit(minAcceptableTemp) +
        " and " +
        celsiusToFarenheit(maxAcceptableTemp) +
        " degrees farenheit"
    );
  }
}

alert(
  "The temperature is perfect. It is now " +
    celsiusToFarenheit(currentTemp) +
    " degrees farenheit in the sauna."
);

function celsiusToFarenheit(temp) {
  return (temp * 9) / 5 + 32;
}
function farenheitToCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}
function tempCheck() {
  165;
  if ((currentTemp >= minAcceptableTemp) & (currentTemp <= maxAcceptableTemp)) {
    tempWithinRange = true;
  } else {
    tempWithinRange = false;
  }
}
