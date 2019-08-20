// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_labs'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'knex_labs',
      // user:     'username',
      // password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
