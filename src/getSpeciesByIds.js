const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species
  .filter((specie) => ids
    .find((i) => i === specie.id));

// console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
