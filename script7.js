let tempCelsius = 0;
let tempFarenheit = setFarenheit(tempCelsius);
window.onload = function () {
  setInterval(increaseTemp, 1000);
  setTemps();
};
function increaseTemp() {
  tempCelsius++;
  setTemps();
}
function decreaseTemp() {
  tempCelsius--;
  setTemps();
}
function setFarenheit() {
  return (tempCelsius * 9) / 5 + 32;
}
function setTemps() {
  document.getElementById("tempCelsius").innerHTML = tempCelsius;
  document.getElementById("tempFarenheit").innerHTML = setFarenheit();
}
// <!-- Tasks:
// -The optimal temperature 75 degrees celsius, acceptable temperature range is from 73 to 77 degrees. This should be controlled entirely in a conditional statement within a loop.
// - If out of range, heat should be increased. After heat increase by user, option to set new value.
// - When temp within acceptable range, a final message to am user should be logged -->
