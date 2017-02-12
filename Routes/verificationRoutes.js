const express = require('express');
const Card = require('../models/cardModel');

function routes() {
    const atmRouter = express.Router();

    atmRouter.route('/checkcard/:cardNumber')
        .get(function (req, res) {
            Card.findOne({ Number: req.params.cardNumber }, function(err, card){
                if(err)
                    res.status(500).send(err);
                else
                    res.status(200).send(true);
            });
        });

    atmRouter.route('/checkpin/:cardPin')
        .get(function (req, res) {
            Card.findOne({ Pin: (req.params.cardPin).toString() }, function(err, card){
                if(err)
                    res.status(500).send(err);
                else
                    res.status(200).send(true);
            });
        });

    return atmRouter;
}

module.exports = routes();

