import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app: express.Application = express();
const apiController: express.Router = require('./controllers/api.controller');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', apiController);

app.get("/", (req, res, next) => {
  res.send(`Hello Express TypeScript Starter`);
});

const mongoDB = 'mongodb://mongodb:27017/my_database';

mongoose.connect(mongoDB, { useNewUrlParser: true });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
