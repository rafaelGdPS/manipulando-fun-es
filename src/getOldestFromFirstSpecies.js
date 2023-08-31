const data = require('../data/zoo_data');

const { employees, species } = data;

const findColaborate = (id) => employees.find((employee) => employee.id === id);
const findFirstAnimal = (id) => findColaborate(id).responsibleFor[0];

// console.log(findColaborate('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(findFirstAnimal('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

const getResidents = (id) => {
  const findSpecie = species.find((specie) => specie.id === findFirstAnimal(id));
  const reduce = findSpecie.residents.reduce((acc, cur) => {
    if (acc < cur.age) {
      return acc * 0 + (cur.age);
    }
    return acc;
  }, 0);
  const arrayOdest = findSpecie.residents.find((older) => reduce === older.age);
  return Object.values(arrayOdest);
};

const getOldestFromFirstSpecies = (id) => {
  findColaborate(id);
  findFirstAnimal(id);
  return getResidents(id);
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
