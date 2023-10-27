const mongoose = require('../db');

const pointSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  score: Number
});

module.exports = mongoose.model('Point', pointSchema);
