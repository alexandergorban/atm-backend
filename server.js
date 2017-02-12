const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost:27017/atm-db');
const Card = require('./models/cardModel');

const port = process.env.PORT || 3000;
const atmRouter = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

atmRouter.route('/cards')
    .post(function (req, res) {
        let card = new Card(req.body);
        card.save();
        res.status(201).send(card);
    })

    .get(function (req, res) {
        let query = {};
        if(req.query.cardID){
            query.cardID = req.query.cardID;
        }
        Card.find(query, function(err, cards){
            if(err)
                res.status(500).send(err);
            else
                res.json(cards);
        });
    });

atmRouter.route('/cards/:cardID')
    .get(function (req, res) {
        Card.findByID(req.params.cardID, function(err, card){
            if(err)
                res.status(500).send(err);
            else
                res.json(card);
        });
    });

app.use('/api', atmRouter);

app.get('/', function (req, res) {
    res.send('welcome to API');
});

app.listen(port, function () {
    console.log('Gulp is running app on PORT: ' + port);
});