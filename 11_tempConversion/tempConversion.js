const convertToCelsius = function(temp) {
  let convert = (temp - 32) * 5/9;
  return roundTemperature(convert);
};

const convertToFahrenheit = function(temp) {
  let convert = (temp * 1.8) + 32;
  return roundTemperature(convert);
};

function roundTemperature(temperature) {
  return Math.round(temperature * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
