window.onload = function () {
  let tempCelsius = 175;
  let tempFarenheit = setFarenheit(tempCelsius);

  setInterval(increaseTemp, 500);
  document.getElementById("tempFarenheit").innerHTML = tempFarenheit;
  document.getElementById("tempCelsius").innerHTML = tempCelsius;
};
function increaseTemp() {}
function decreaseTemp() {}
function setFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
// <!-- Tasks:
// -The optimal temperature 75 degrees celsius, acceptable temperature range is from 73 to 77 degrees. This should be controlled entirely in a conditional statement within a loop.
// - If out of range, heat should be increased. After heat increase by user, option to set new value.
// - When temp within acceptable range, a final message to am user should be logged -->
