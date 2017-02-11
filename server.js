const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost:27017/atm-db');
const Card = require('./models/cardModel');

const port = process.env.PORT || 3000;
const atmRouter = express.Router();

atmRouter.route('/card')
    .get(function (req, res) {
        let query = req.query;
        Card.find(query, function(err, cards){
            if(err)
                res.status(500).send(err);
            else
                res.json(cards);
        });
    });

app.use('/api', atmRouter);

app.get('/', function (req, res) {
    res.send('welcome to API');
});

app.listen(port, function () {
    console.log('Gulp is running app on PORT: ' + port);
});