const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const Sentry = require('@sentry/node');
require('dotenv').config();

// Importer les routeurs
const userRouter = require('./controllers/user');
//const matchRouter = require('./controllers/match'); // Supposons que vous ayez un contrôleur pour les matchs
// ... importer d'autres routeurs ...

// Initialiser Sentry pour la surveillance des erreurs
//Sentry.init({ dsn: process.env.SENTRY_DSN });

const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Middleware pour analyser les cookies
app.use(cookieParser());

// Middleware CORS pour gérer les requêtes cross-origin
app.use(cors());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connecté"))
    .catch(err => console.error("Erreur de connexion à MongoDB", err));

// Utiliser les routeurs
app.use(userRouter);
//app.use(matchRouter);
// ... utiliser d'autres routeurs ...

// Gestion des erreurs
app.use((err, req, res, next) => {
    Sentry.captureException(err);
    res.status(500).send({ message: err.message });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
