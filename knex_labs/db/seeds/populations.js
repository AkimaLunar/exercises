const data = require('../../allCountries');

exports.seed = function(knex, Promise) {
  return knex('populations')
    .del()
    .then(() => {
      return knex.select('id', 'code').from('countries');
    })
    .then(countries => {
      const tableData = data.map((entry) => ({
        year: entry.year,
        quantity: Math.floor(entry.value),
        country_id: countries.find(
          (country) => country.code === entry.countryCode,
        ).id,
      }));
      return knex('populations').insert(tableData);
    })
};
