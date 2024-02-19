const preferenceSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    preferences: [{
        preferenceType: { type: String, required: true },
        preferenceValue: { type: String, required: true },
        // Ajouter ici badge_id si les préférences sont liées à des badges spécifiques.
    }]
});
const Preference = mongoose.model('Preference', preferenceSchema);
