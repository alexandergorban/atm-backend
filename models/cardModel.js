const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardModel = new Schema({
    cardID: {type: Number},
    Number: {type: Number},
    ExpiresEndDate: {type: Date},
    CVV: {type: String},
    Pass: {type: String},
    cardHolder: {type: String},
    cardType: {type: String},
    cardActive: {type: Boolean, default:false}
});

module.exports = mongoose.model('Card', cardModel);