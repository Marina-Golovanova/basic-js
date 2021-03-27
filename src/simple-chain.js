const chainMaker = {
  _link: [],
  getLength() {
    return this._link.length;
  },
  addLink(value) {
    this._link.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this._link = []
      throw new Error;
    }
    this._link.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this._link = this._link.reverse()
    return this;
  },
  finishChain() {
    const newChain = this._link.map(el => `( ${el} )`).join('~~');
    this._link = [];
    return newChain;
  }
};

module.exports = chainMaker;
