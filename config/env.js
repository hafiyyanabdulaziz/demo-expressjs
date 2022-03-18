require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3500,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_HOST: process.env.DB_HOST || "remotemysql.com",
  DB_PORT: process.env.DB_PORT || 3306,
  DB_USERNAME: process.env.DB_USERNAME || "QN4Icubbto",
  DB_PASSWORD: process.env.DB_PASSWORD || "VSAlNEW6Zr",
  DB_DATABASE: process.env.DB_DATABASE || "QN4Icubbto",
  JWT_SECRET: process.env.JWT_SECRET || "halohalobandung",
  SECRET_ACCESS_TOKEN: process.env.SECRET_ACCESS_TOKEN || "halohalobandung",
  SECRET_REFRESH_TOKEN: process.env.SECRET_REFRESH_TOKEN || "halohalobandung",
};
