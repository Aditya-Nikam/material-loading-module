require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Ensure this matches your actual PostgreSQL password
    database: process.env.DB_NAME, // Replace with your development database name if needed
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    migrationStorageTableName: 'migrations'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Ensure this matches your actual PostgreSQL password
    database: process.env.DB_NAME, // Replace with your development database name if needed
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    migrationStorageTableName: 'migrations'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Ensure this matches your actual PostgreSQL password
    database: process.env.DB_NAME, // Replace with your development database name if needed
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    migrationStorageTableName: 'migrations'
  },
  secret: process.env.JWT_SECRET_KEY
};
