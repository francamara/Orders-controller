require('dotenv').config();
const express = require('express');

const dbConnection = require('./db/connection');

const OrderController = require('./controllers/Order')

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.post('/order', OrderController.create);
api.get('/order/:id', OrderController.getOrderById);

const port = process.env.PORT || 3000;

dbConnection.authenticate()
    .then(() => {
        api.listen(port, () => {
            console.log(`Server started on PORT ${port}`);
        });
    })
    .catch(err => {
        console.log(err);
    });