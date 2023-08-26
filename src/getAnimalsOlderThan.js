const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((specie) => animal === specie.name).residents
  .every((old) => old.age >= age);

// console.log(getAnimalsOlderThan('lions', 20));

module.exports = getAnimalsOlderThan;
