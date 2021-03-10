require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use('/api',require('./routes/api'))

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);
	await sequelize.authenticate();
	console.log("Database connected!");
});
