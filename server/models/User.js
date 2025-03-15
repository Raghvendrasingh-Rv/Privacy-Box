const pool = require('../config/db');

const User = async()=>{
  try{
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL);
      `);
    console.log("user table created");
  } catch (error){
    console.log("Error creating table:", error);
  }
};


module.exports = User;