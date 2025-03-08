//This code snippet is used to set up a database connection in a Node.js application using PostgreSQL with the pg library. It leverages environment variables for configuration and exports a connection pool for use throughout the application.
const { Pool }  = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user : process.env.DB_USER,
  host : process.env.DB_HOST,
  database : process.env.DB_NAME,
  password : process.env.DB_PASSWORD,
  port : process.env.DB_PORT || 5432,
});

pool.on("connect", () => {
  console.log("Connected to PostgreSQL database.");
});

module.exports = pool;