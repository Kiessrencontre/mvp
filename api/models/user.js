const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String, default: '' },
    last_name: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, required: true },
    phone_number: { type: String, default: '' },
    gender: { type: String, default: '' },
    orientation: { type: String, default: '' },
    date_of_birth: { type: Date },
    address: { type: String, default: '' },
    profile_picture: { type: String, default: '' },
    points: { type: Number, default: 0 },
    contacts: [{ contact_id: { type: Schema.Types.ObjectId, ref: 'User' } }],
    badges: [{
        badge_id: { type: Schema.Types.ObjectId, ref: 'Badge' },
        badge_name: { type: String, default: '' }
    }]
});

// Création du modèle User à partir du schéma
const User = mongoose.model('User', userSchema);

module.exports = User;
