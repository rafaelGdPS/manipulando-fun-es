const data = require('../data/zoo_data');

const { species } = data;

const forAnimals = (animals) => {
  const findAnimal = species.find((animal) => animals === animal.name);
  return findAnimal.availability;
};
// console.log(forAnimals('lions'));

const allAvailability = Object.keys(data.hours);
const allAnimals = () => species.map((animal) => animal.name);
const arrayAnimal = allAnimals();

const exhibition = (day) => {
  const getAnimalsForDay = data.species.filter((dia) => dia.availability.includes(day));
  return getAnimalsForDay.map((animal) => animal.name);
};

const officeHour = (days) => {
  let message;
  const objeto = {};

  allAvailability.forEach((day) => {
    message = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
    objeto[day] = {
      officeHour: message,
      exhibition: exhibition(day),
    };
    if (day === 'Monday') {
      objeto.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return objeto;
};

const getHour = (scheduleTarget) => ({
  [scheduleTarget]: officeHour()[scheduleTarget],
});
// console.log(getHour('Monday'));

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return officeHour(scheduleTarget);
  }
  if (allAvailability.includes(scheduleTarget)) {
    return getHour(scheduleTarget);
  }
  if (arrayAnimal.includes(scheduleTarget)) {
    return forAnimals(scheduleTarget);
  }
  return officeHour(scheduleTarget);
};
// console.log(getSchedule('bata'));

module.exports = getSchedule;
