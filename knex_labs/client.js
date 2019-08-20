const knex = require('knex');
const config = require('./knexfile');
const client = knex(config.development);
module.exports = client;
