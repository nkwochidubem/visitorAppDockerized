/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from 'morgan';

import { router } from './config/routes';
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/visitor-list', { useNewUrlParser: true }  , err => {
    if (err) throw err;
    console.log(`Successfully connected to database.`);
});

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(logger('dev'));
app.use('/api', router);

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


app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
});

