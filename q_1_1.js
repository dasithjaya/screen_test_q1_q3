Date.prototype.daysTo = function (date) {

  // Check the dates are in correct format
  if(date === "Invalid Date" || this == "Invalid Date") return ("Please enter correct format of date")
  
  // Get the time difference in milliseconds
  const diffMilliSeconds = date.getTime() - this.getTime();

  // Convert milliseconds in to days
  const diffDate = Math.abs(Math.round(diffMilliSeconds / (1000 * 60 * 60 * 24)));

  return diffDate;
};

const d1 = new Date("2024-05-30");
const d2 = new Date("2024-06-2");
console.log(d1.daysTo(d2));
