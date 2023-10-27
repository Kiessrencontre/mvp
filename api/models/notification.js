const mongoose = require('../db');

const notificationSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  receive_notifications: Boolean
});

module.exports = mongoose.model('Notification', notificationSchema);
