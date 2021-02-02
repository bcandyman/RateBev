require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
