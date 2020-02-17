const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(string) {
  if (string == undefined || typeof string != "string") 
    return false; 
  let temp = parseFloat(string);
  if (Number.isNaN(temp) || temp > 15 || temp <= 0)
    return false; 
  return Math.ceil(Math.log(MODERN_ACTIVITY / temp) / (0.693 / HALF_LIFE_PERIOD));
};
