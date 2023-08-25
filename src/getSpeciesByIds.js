const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const findSpecies = data.species
    .filter((specie) => ids
      .find((i) => i === specie.id));

  return findSpecies;
};
// console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
