const express = require('express');
const createError = require('http-errors');
require('express-async-errors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./src/routes/index');

dotenv.config();


const db = require('./src/config/db');

// Connection Database
db.connect();

const app = express();

app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false,
	}),
);
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json({message:'App is running!'});
});

route(app);


app.use((req, res, next) => {
	res.json({message: '404'});
});

app.use((err, req, res) => {
	console.log(err.stack);
	res.status(err.status || 500).send(err.message);
});

const server = app.listen(process.env.PORT, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});
