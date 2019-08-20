
exports.up = function(knex, Promise) {
    return knex.schema.createTable('populations', table => {
      table.increments('id');
      table.integer('year');
      table.bigint('quantity');
      table.integer('country_id');
      table.foreign('country_id').references('countries.id');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('populations');
  };
