module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    return members.filter((el) => typeof (el) == 'string')
      .map((el) => el = String(el).replace(/ /g, ''))
      .map((el) => el = el[0].toUpperCase())
      .sort().join('');
  }
};
