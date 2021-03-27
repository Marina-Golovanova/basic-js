const conditionsPrev = ['--double-prev', '--discard-prev'];

module.exports = function transform(arr) {
  arr = [...arr]
  if (!Array.isArray(arr)) {
    throw Error;
  }
  else {
    while (arr.includes('--double-next') || arr.includes('--double-prev') || arr.includes('--discard-next') || arr.includes('--discard-prev')) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
          if (conditionsPrev.includes(arr[i + 2])) {
            arr.splice(i, 3)
            break;
          } else {
            i == (arr.length - 1) ? arr.splice(i, 1) : arr.splice(i, 2);
            break;
          }
        } else if (arr[i] === '--discard-prev') {
          i == 0 ? arr.splice(i, 1) : arr.splice(i - 1, 2)
          break;
        } else if (arr[i] === '--double-next') {
          i == (arr.length - 1) ? arr.splice(i, 1) : arr[i] = arr[i + 1];
          break;
        } else if (arr[i] === '--double-prev') {
          i == 0 ? arr.splice(i, 1) : arr[i] = arr[i - 1]
          break;
        }
      }
    }
  }
  return arr;
};