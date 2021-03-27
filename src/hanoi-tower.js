module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsSeconds = {
    turns: 2 ** disksNumber - 1,
    seconds: Math.floor((2 ** disksNumber - 1) * 3600 / turnsSpeed)
  }
  return turnsSeconds;
};
