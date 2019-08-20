
const data = require('../../allCountries');

module.exports.seed = function(knex) {
  const countries = data.map(({countryName, countryCode}) => ({
    name: countryName, code:countryCode
  }))
  return knex('countries')
    .del()
    .then(() => {
      return knex('countries').insert(countries);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
