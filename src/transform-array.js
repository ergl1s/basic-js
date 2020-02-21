module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error; 
  if (arr.length == 0) return []; 
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == "--discard-next") {
      if (i < arr.length - 1) {
        i++; 
      }
      continue;
    }
    if(arr[i] == "--discard-prev") {
      if (i > 0) {
        result.pop();
      }
      continue;
    }
    if(arr[i] == "--double-next") {
      if (i < arr.length - 1) {
        result.push(arr[i+1]);
      }
      continue;
    }
    if(arr[i] == "--double-prev") {
      if (i > 0) {
        result.push(arr[i-1]);
      }
      continue;
    }
    result.push(arr[i]);
  }
  return result;
};
