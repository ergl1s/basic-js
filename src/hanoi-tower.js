module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsVar = 2**disksNumber - 1;
  return {
    turns: turnsVar,
    seconds: turnsVar / (turnsSpeed / 3600)
  };
}