require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes/api'));

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
