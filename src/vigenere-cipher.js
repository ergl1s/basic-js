class VigenereCipheringMachine {
  constructor (bool) {
      if (bool == true || bool === undefined) {
        this.flag = true; 
      }
      else this.flag = false; 
  };
  encrypt(message, key) {
    if(message === undefined || key === undefined)
      throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let array = []; 
    let keyLength = key.length; 
    let shift = 0; 
    for(let i = 0; i < message.length; i++) {
      let code = message.charCodeAt(i);
      array.push(code);
      if (code >= 65 && code <= 90) {
        array[i] += key.charCodeAt((i-shift) % keyLength)-65;
        if (array[i] > 90) array[i] -= 26; 
      }
      else shift++;
    }
    if (this.flag) {
      return String.fromCharCode(...array);
    } 
    else {
      return String.fromCharCode(...array.reverse());
    }
  }

  decrypt(string, key) {
    if(string === undefined || key === undefined)
      throw Error;
    string = string.toUpperCase();
    key = key.toUpperCase();
    let array = []; 
    let keyLength = key.length; 
    let shift = 0; 
    for(let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);
      array.push(code);
      if (code >= 65 && code <= 90) {  
        array[i] -= key.charCodeAt((i-shift) % keyLength)-65;
        if (array[i] < 65) array[i] += 26; 
      }
      else shift++;
    }
    if (this.flag) {
      return String.fromCharCode(...array);
    } 
    else {
      return String.fromCharCode(...array.reverse());
    }
  }
}

module.exports = VigenereCipheringMachine;
