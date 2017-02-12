const express = require('express');
const cardVerification = require('../verification/cardVerification');

function routes() {
    const verificationRouter = express.Router();

    verificationRouter.route('/checkcard/:cardNumber')
        .get(function (req, res) {
            cardVerification.numberVerification(req.params.cardNumber)
                .then(result => {
                    res.status(200).send(true);
                })
                .catch(result => {
                    res.status(500).send(false);
                });
        });

    verificationRouter.route('/checkpin/:cardPin')
        .get(function (req, res) {
            cardVerification.pinVerification(req.params.cardPin)
                .then(result => {
                    res.status(200).send(true);
                })
                .catch(result => {
                    res.status(500).send(false);
                });
        });

    return verificationRouter;
}

module.exports = routes();

