const cardSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    revealed: { type: Boolean, default: false },
    points_required: { type: Number, default: 0 }
});
const Card = mongoose.model('Card', cardSchema);
