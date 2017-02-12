const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardModel = new Schema({
    Number: {type: Number},
    ExpiresEndDate: {type: Date},
    CVV: {type: String},
    Pin: {type: String},
    CardHolder: {type: String},
    CardType: {type: String},
    CardActive: {type: Boolean, default:false}
});

module.exports = mongoose.model('Card', cardModel);