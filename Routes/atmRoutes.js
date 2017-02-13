const express = require('express');
const Card = require('../models/cardModel');

/**
 * ATM Routes. Return All Cards and Card by Number, POST New Card
 * @returns {Router}
 */
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
            Card.findOne({ Number: (req.params.cardNumber).toString() }, function(err, card){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(card);
            });
        })
        .put(function (req, res) {
            Card.findOne({ Number: (req.params.cardNumber).toString() }, function (err, card) {
                if(err)
                    res.status(500).send(err);
                else
                    card.Number = req.body.Number;
                    card.ExpiresEndDate = req.body.ExpiresEndDate;
                    card.CVV = req.body.CVV;
                    card.Pin = req.body.Pin;
                    card.Balance = req.body.Balance;
                    card.CardHolder = req.body.CardHolder;
                    card.CardType = req.body.CardType;
                    card.CardActive = req.body.CardActive;
                    card.save();
                    res.json(card);
            });
        });
    return atmRouter;
}

module.exports = routes();