class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  square = [];

  constructor(bool) {
    this.variantEncrypt = bool || bool === undefined;
    this.variantDecrypt = !bool;
    for (let i = 0; i < 26; i++) {
      this.square[i] = this.alphabet.slice(i).concat(this.alphabet.slice(0, i));
    }
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    key = this._balanceKey(message, key.toUpperCase());
    this.messageLengthOriginal = message.length;


    let result = '';
    for (let i = 0; i < message.length; i++) {
      if (!/[A-Z]/.test(message[i])) {
        result += message[i];
        key = key.slice(0, i) + ' ' + key.slice(i);
      } else {
        const indexOfMessage = this.alphabet.indexOf(message[i]);
        const indexOfKey = this.alphabet.indexOf(key[i]);
        result += this.square[indexOfMessage][indexOfKey]
      }
    }
    return this.variantEncrypt ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    message = message.toUpperCase();
    key = this._balanceKey(message, key.toUpperCase());
    let result = '';
    for (let i = 0; i < message.length; i++) {
      if (!/[A-Z]/.test(message[i])) {
        result += message[i];
        key = key.slice(0, i) + ' ' + key.slice(i);
      } else {
        const row = this.square[this.alphabet.indexOf(key[i])];
        const indexOfCell = row.indexOf(message[i])
        result += this.alphabet[indexOfCell];
      }
    }
    return this.variantEncrypt ? result : result.split('').reverse().join('');
  }
  _balanceKey(message, key) {
    while (key.length < message.length) {
      const difference = message.length - key.length;
      key += key.substr(0, difference);
    }
    return key;
  }
}

module.exports = VigenereCipheringMachine;
