const mongoose = require('../db');

const messageSchema = new mongoose.Schema({
  sender_id: mongoose.Schema.Types.ObjectId,
  receiver_id: mongoose.Schema.Types.ObjectId,
  message: String,
  timestamp: Date
});

module.exports = mongoose.model('Message', messageSchema);
