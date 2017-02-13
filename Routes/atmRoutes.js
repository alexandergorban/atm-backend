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

    atmRouter.use('/cards/:cardNumber', function (req, res, next) {
        Card.findOne({ Number: (req.params.cardNumber).toString() }, function(err, card){
            if(err){
                res.status(500).send(err);
            } else if (card){
                req.card = card;
                next();
            } else {
                res.status(404).send('no card found');
            }
        });
    });

    atmRouter.route('/cards/:cardNumber')
        .get(function (req, res) {
            res.json(req.card);
        })
        .put(function (req, res) {
            req.card.Number = req.body.Number;
            req.card.ExpiresEndDate = req.body.ExpiresEndDate;
            req.card.CVV = req.body.CVV;
            req.card.Pin = req.body.Pin;
            req.card.Balance = req.body.Balance;
            req.card.CardHolder = req.body.CardHolder;
            req.card.CardType = req.body.CardType;
            req.card.CardActive = req.body.CardActive;
            req.card.save(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.card);
            });
        })
        .patch(function(req, res){
            if(req.body._id)
                delete req.body._id;
            for(let p in req.body){
                req.card[p] = req.body[p];
            }
            req.card.save(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.card);
            });
        });
    return atmRouter;
}

module.exports = routes();