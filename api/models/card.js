const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    owner_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    revealed: { type: Boolean, default: false },
    points_required: { type: Number, default: 0 }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
