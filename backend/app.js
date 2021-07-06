const express=require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');


app.use(express.json());

const products = require('./routes/products');

app.use('/api/v1', products);

//MiddleWare to handle errors
app.use(errorMiddleware);

module.exports = app;