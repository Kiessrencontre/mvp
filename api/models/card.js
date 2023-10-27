const mongoose = require('../db');

const cardSchema = new mongoose.Schema({
  owner_id: mongoose.Schema.Types.ObjectId,
  revealed: Boolean,
  points_required: Number
});

module.exports = mongoose.model('Card', cardSchema);
