module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) != '[object Date]') {
    throw Error;
  } else {
    for (let i = 0; i < Object.values(seasons).length; i++) {
      if (Object.values(seasons)[i].includes(date.getMonth())) {
        return Object.keys(seasons)[i];
      }
    }
  }
};

const seasons = {
  winter: [11, 0, 1],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  autumn: [8, 9, 10]
}
