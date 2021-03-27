module.exports = function repeater(str, options) {
  str = String(str);
  let newStr = str;
  if (Object.keys(options).includes('addition')) {
    options['addition'] = String(options['addition']);
    if (Object.keys(options).includes('additionRepeatTimes')) {
      add = [];
      for (let i = 0; i < options['additionRepeatTimes']; i++) {
        add.push(options['addition']);
      }
      if (Object.keys(options).includes('additionSeparator')) {
        newStr += add.join(`${options['additionSeparator']}`);
      } else {
        newStr += add.join('|');
      }
    } else {
      newStr += options['addition'];
    }
  }

  if (Object.keys(options).includes('repeatTimes')) {
    if (Object.keys(options).includes('separator')) {
      newStr += options['separator'];
      newStr = newStr.repeat(options['repeatTimes']);
      newStr = newStr.slice(0, -options['separator'].length);
    } else {
      newStr += '+';
      newStr = newStr.repeat(options['repeatTimes']);
      newStr = newStr.slice(0, -1);
    }
  }
  return newStr;
};