const dotenv = require('dotenv');
const user = require("./models/User");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth',authRoutes);

(async () => {
  await user();
})();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});