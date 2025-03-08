const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

// Register

router.post("/register", async (req,res)=>{
  const {username, password} = req.body;

  try{
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", [username, hashedPassword]
    );

    res.json({message: "User registered successfully", user: result.rows[0]});
  }
  catch(e){
    res.status(500).json({message:"Error registering user"});
  }
});

//Login

router.post("/login", async(req,res)=>{
  const {username, password} = req.body;

  try{
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if(result.rows.length === 0){
      return res.status(400).json({message: "User not found"});
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
      
    if(!isMatch){
      return res.status(400).json({message:"Invalid credential"});

      const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn:"1h"}); 
    }
    res.json(token);
  }
  catch(error){
    res.status(500).json({message: "Error logging in"});
  }
});

module.exports = router;

