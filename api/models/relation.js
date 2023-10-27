const mongoose = require('../db');

const relationSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  other_user_id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Relation', relationSchema);
