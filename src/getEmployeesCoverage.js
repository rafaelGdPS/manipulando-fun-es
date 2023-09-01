const data = require('../data/zoo_data');

// Array com todas IDs dos Colaboradores

const allIds = data.employees.map((id) => id.id);

// Funções que retorna array com objeto de todos colaboradores

const arrayAnimals = (array) => {
  const findId = data.species.filter((specie) => array.includes(specie.id));
  return findId.map((name) => name.name);
};

const arrayLocation = (array) => {
  const findId = data.species.filter((specie) => array.includes(specie.id));
  return findId.map((local) => local.location);
};

const getAllEmployees = () => data.employees
  .map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: arrayAnimals(employee.responsibleFor),
    locations: arrayLocation(employee.responsibleFor),
  }));

// const allFullName = getAllEmployees().map((name) => name.fullName);

const getEmployeerById = (objeto) => {
  const values = Object.values(objeto);
  const employees = getAllEmployees()
    .find((employee) => values[0] === employee.id);
  return employees;
};

const getName = (objeto) => {
  const values = Object.values(objeto);
  return getAllEmployees().find((employee) => employee.fullName.split(' ').includes(values[0]));
};

const getEmployeesCoverage = (objeto) => {
  if (!objeto) {
    return getAllEmployees();
  }
  if (getAllEmployees().some((em) => em.fullName.includes(Object.values(objeto)[0]))) {
    return getName(objeto);
  }
  if (allIds.includes(Object.values(objeto)[0])) {
    return getEmployeerById(objeto);
  }
  throw new Error('Informações inválidas');
};
// console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));
// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
