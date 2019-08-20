const knex = require('./client');

const query1 = knex
  .select('*')
  .from('countries')
  .where('name', 'ilike', 'b%');
// query1.then(countries => console.log(countries));

const query2 = knex('countries')
    .count('* as count')
    .where('name', 'ilike', '%central%');
query2.then(count => console.table(count));

const query3 = knex
    .select('*')
    .from('countries')
    .whereRaw(`"name" ilike "code" || '%'`);
query3.then(countries => console.table(countries));
