const Card = require('../models/cardModel');

/**
 * CardVerification
 * @typedef {Object} CardVerification
 */
class CardVerification{

    /**
     * Verification Card Number
     * @param {String} numberEntered - Hashed Client Card Number
     * @returns {Promise}
     */
    numberVerification(numberEntered){
        return new Promise((resolve, reject) => {
            Card.findOne({ Number: (numberEntered).toString(), CardActive: true }, function (err, card) {
                if (card){
                    resolve(true);
                } else {
                    reject(false);
                }
            });
        });
    }

    /**
     * Verification Card by Pin Code
     * @param {String} numberEntered - Hashed Client Card Number
     * @param {String} pinEntered - Hashed Client Pin Code
     * @returns {Promise}
     */
    pinVerification(numberEntered, pinEntered){
        return new Promise((resolve, reject) => {
            Card.findOne({ Number: (numberEntered).toString(), Pin: (pinEntered).toString(), CardActive: true },
                function (err, card) {
                    if (card){
                        resolve(true);
                    } else {
                        reject(false);
                    }
                });
        });
    }
}

module.exports = new CardVerification();