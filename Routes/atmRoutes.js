const express = require('express');
const Card = require('../models/cardModel');

function routes() {
    const atmRouter = express.Router();

    atmRouter.route('/cards')
        .post(function (req, res) {
            let card = new Card(req.body);
            card.save();
            res.status(201).send(card);
        })

        .get(function (req, res) {
            let query = {};
            if(req.query.Number){
                query.Number = req.query.Number;
            }
            Card.find(query, function(err, cards){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(cards);
            });
        });

    atmRouter.route('/cards/:cardNumber')
        .get(function (req, res) {
            Card.findOne({ Number: req.params.cardNumber }, function(err, card){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(card);
            });
        });
    return atmRouter;
}

module.exports = routes();