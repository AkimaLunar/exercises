
const data = require('../../allCountries');

const _countries = data.reduce((acc, country) => {
  return acc[country.countryCode] = {
    code: country.countryCode,
    name: country.countryName
  }
}, {})

module.exports.seed = function(knex) {
  const countries = Object.values(_countries)
  return knex('countries')
    .del()
    .then(() => {
      return knex('countries').insert(countries);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};