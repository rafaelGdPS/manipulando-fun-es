const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const getEmployee = data.employees
    .find((employee) => employeeName === employee.firstName || employeeName === employee.lastName);

  if (employeeName) {
    return getEmployee;
  }
  return {};
};
// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
