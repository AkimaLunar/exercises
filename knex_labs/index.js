const knex = require('./client');
const allCountries = require('./allCountries')

const query1 = knex
  .select('*')
  .from('countries')
  .where('name', 'ilike', 'b%');
// query1.then(countries => console.log(countries));

const query2 = knex('countries')
    .count('* as count')
    .where('name', 'ilike', '%central%');
    select count(*) as "count" from "countries" where "name" ilike '%central%'
// query2.then(count => console.log(count));

const query3 = knex
    .select('*')
    .from('countries')
    .whereRaw(`"name" ilike "code" || '%'`);
    select * from "countries" where "name" ilike "code" || '%'
// query3.then(countries => console.log(countries));
