const { NODE_ENV } = require("./env");

const env = NODE_ENV || "development";
const config = require("../knexfile")[env];

module.exports = require("knex").knex(config);
