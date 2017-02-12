const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * cardModel
 * @typedef {Object} cardModel
 * @property {String} Number - Hashed Card Number
 * @property {Date} ExpiresEndDate - Expires End Card
 * @property {String} CVV - Hashed CVV Card
 * @property {String} Pin - Hashed Pin Card
 * @property {Number} Balance - Card Balance
 * @property {String} CardHolder - Card Holder
 * @property {String} CardType - Type Card (Visa, MasterCard)
 * @property {Boolean} CardActive - Active Card or Not
 */
const cardModel = new Schema({
    Number: {type: String},
    ExpiresEndDate: {type: Date},
    CVV: {type: String},
    Pin: {type: String},
    Balance: {type: Number},
    CardHolder: {type: String},
    CardType: {type: String},
    CardActive: {type: Boolean, default:false}
});

module.exports = mongoose.model('Card', cardModel);