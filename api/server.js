const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch((error) => console.error('Connexion à MongoDB échouée', error));

// Exemple de route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur notre API');
});

// Importation des routes
// Assurez-vous d'avoir un fichier pour chaque groupe de routes (users, messages, etc.)
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const badgeRoutes = require('./routes/badgeRoutes');
// Utilisation des routes importées
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/badges', badgeRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
