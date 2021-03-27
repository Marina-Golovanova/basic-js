module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    for (let el of arr) {
      if (Array.isArray(el)) {
        const current = this.calculateDepth(el) + 1
        max < current ? max = current : max;
      }
    }

    return max;
  }
};