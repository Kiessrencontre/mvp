const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const relationSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    other_user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Relation = mongoose.model('Relation', relationSchema);

module.exports = Relation;
