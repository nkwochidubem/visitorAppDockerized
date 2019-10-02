/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

const router = require('./src/config/routes');
const app = express();

app.use((req,res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PATCH,DELETE,PUT,HEAD");
  next();
});

mongoose.Promise = global.Promise;

// mongodb local connection mongodb://localhost/visitor-list
mongoose.connect('mongodb+srv://platform1470:icui4cu5517@vsitor-app-agkvz.mongodb.net/visitorApp', { useNewUrlParser: true }  , err => {
    if (err) throw err;
    console.log(`Successfully connected to Monogo database.`);
});

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());
// app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, './public/')));
app.use('/api', router);

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.message = 'invalid route';
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || 500);
    return res.json({
        error: {
            message: error.message
        }
    });
});


app.listen(process.env.PORT || 5000, () => {
   console.log(`server is listening on port: ${PORT}`);
});

