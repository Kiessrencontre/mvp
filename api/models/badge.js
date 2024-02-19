const badgeSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    iconSVG: { type: String, required: true }, // Peut stocker des données SVG directement ou un chemin d'accès
    matchmakingWeight: { type: Number, required: true } // Poids dans le matchmaking
});

const Badge = mongoose.model('Badge', badgeSchema);
