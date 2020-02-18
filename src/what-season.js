module.exports = function getSeason(date) {
  if (!date instanceof Date) throw Error; 
  let date2 = new Date(); 
  if (date - date2 == 0 || date == undefined) return 'Unable to determine the time of year!';
  temp = date.getMonth(); 
  if (temp == 11 || temp == 0 || temp == 1) return "winter";
  if (temp == 2 || temp == 3 || temp == 4) return "spring";
  if (temp == 5 || temp == 6 || temp == 7) return "summer"; 
  if (temp == 8 || temp == 9 || temp == 10) return "fall";
};