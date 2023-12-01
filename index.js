const addDays = require("date-fns/addDays");
const format = require("date-fns/format");

const myFunction = (days) => {
  const result = addDays(new Date("2020, 7, 22"), days);
  return result;
};

module.exports = myFunction;

const result = format(myFunction(3), "dd-MM-yyyy");
console.log(result);
