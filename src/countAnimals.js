const data = require('../data/zoo_data');

const objectAnimal = (animal) => {
  const array = data.species.find((specie) => Object.values(animal)[0] === specie.name);

  if (Object.keys(animal).includes('sex')) {
    const sexResident = array.residents
      .filter((resident) => Object.values(animal)[1] === resident.sex);
    return sexResident.length;
  }
  return array.residents.length;
};

const countAnimals = (animal) => {
  const obj = {};
  data.species
    .forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
  if (typeof animal === 'object') {
    return objectAnimal(animal);
  }

  return obj;
};
// console.log(countAnimals({ species: 'penguins' }));

module.exports = countAnimals;
