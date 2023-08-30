const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (arrayEntrants) => ({
  child: arrayEntrants.filter((entrant) => entrant.age < 18).length,
  adult: arrayEntrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
  senior: arrayEntrants.filter((entrant) => entrant.age >= 50).length,
});
// console.log(countEntrants(entrants));

const calculateEntry = (arrayEntrants) => {
  if (!arrayEntrants || arrayEntrants === []) {
    return 0;
  }
  const qtd = countEntrants(arrayEntrants);
  const seniorPrice = data.prices.senior * qtd.senior;
  const adultPrice = data.prices.adult * qtd.adult;
  const childPrice = data.prices.child * qtd.child;
  return seniorPrice + adultPrice + childPrice;
};
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
