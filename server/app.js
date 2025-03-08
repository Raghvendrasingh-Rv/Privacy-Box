// This Node.js code snippet sets up a basic Express.js server with CORS support, JSON body parsing, and authentication routes.

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth',authRoutes);

module.exports = app;