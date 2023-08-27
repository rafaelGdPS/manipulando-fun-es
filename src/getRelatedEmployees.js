const data = require('../data/zoo_data');

const isManager = (id) => {
  const arrayManager = data.employees.some((manager) => manager.managers.includes(id));
  return arrayManager;
};
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

const verifyManager = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

const getRelatedEmployees = (managerId) => {
  const relatedEmployees = data.employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((colaborate) => `${colaborate.firstName} ${colaborate.lastName}`);
  verifyManager(managerId);
  return relatedEmployees;
};
// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };
