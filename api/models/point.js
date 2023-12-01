const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pointSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    score: { type: Number, default: 0 }
});

const Point = mongoose.model('Point', pointSchema);

module.exports = Point;
