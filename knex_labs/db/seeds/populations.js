const rawData = require('../../allCountries');

exports.seed = function(knex, Promise) {
  return knex('populations')
    .del()
    .then(() => {
      // (1) Get all countries
      return knex.select('id', 'code').from('countries');
    })
    .then(countries => {
      // (2) Constructing the array to insert…
      const _data = countries
        .map(({code, id}) => {
          // (2.1) Find corresponding country object from raw data.
          const _country = rawData
          .find((entry) => code === entry.countryCode)

          // (2.2) If there is no country object found -> skip!
          if (!_country) { return };

          // (2.3) Otherwise add a new object to the final
          // array to insert.
          return {
            year: _country.year,
            quantity: Math.floor(_country.value),
            country_id: id,
          }
        })
        // (2.4) Clean out all the undefened's if any.
        .filter((n) => n)

      // (3) Insert the transformed data.
      return knex('populations').insert(_data);
    })
};
