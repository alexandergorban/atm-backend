const Card = require('../models/cardModel');

class CardVerification{

    numberVerification(numberEntered){
        return new Promise((resolve, reject) => {
            Card.findOne({ Number: numberEntered }, function (err, card) {
                if (card){
                    resolve(true);
                } else {
                    reject(false);
                }
            });
        });
    }

    pinVerification(numberEntered, pinEntered){
        return new Promise((resolve, reject) => {
            Card.findOne({ Number: numberEntered, Pin: (pinEntered).toString() }, function (err, card) {
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