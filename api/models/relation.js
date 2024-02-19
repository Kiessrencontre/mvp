const relationSchema = new Schema({
    user1_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    user2_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
const Relation = mongoose.model('Relation', relationSchema);
