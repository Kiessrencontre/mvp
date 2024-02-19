const messageSchema = new Schema({
    sender_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    points: { type: Number, default: 0 }
});

const Message = mongoose.model('Message', messageSchema);
