// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "remotemysql.com",
      port: 3306,
      user: "QN4Icubbto",
      password: "VSAlNEW6Zr",
      database: "QN4Icubbto",
    },
    pool: {
      min: 1,
      max: 5,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "mysql",
    connection: {
      host: "remotemysql.com",
      port: 3306,
      user: "QN4Icubbto",
      password: "VSAlNEW6Zr",
      database: "QN4Icubbto",
    },
    pool: {
      min: 1,
      max: 5,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "mysql",
    connection: {
      host: "remotemysql.com",
      port: 3306,
      user: "QN4Icubbto",
      password: "VSAlNEW6Zr",
      database: "QN4Icubbto",
    },
    pool: {
      min: 1,
      max: 5,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    useNullAsDefault: true,
  },
};
