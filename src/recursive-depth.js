module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let array = [1]; 
    if (Array.isArray(arr)) {
      for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
          array.push(1 + this.calculateDepth(arr[i]));
        }
      }
    } 
    return Math.max(...array); 
  }
};