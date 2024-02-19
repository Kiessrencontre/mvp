const notificationSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receive_notifications: { type: Boolean, default: true }
});

const Notification = mongoose.model('Notification', notificationSchema);
