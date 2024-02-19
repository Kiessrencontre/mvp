const User = require('../models/user'); // Assurez-vous que le chemin vers votre modèle User est correct
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Créer un nouvel utilisateur
const createUser = async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            ...req.body,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).send('Utilisateur créé avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de la création de l’utilisateur');
    }
};

// Connecter un utilisateur
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).send('Identification échouée');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send('Erreur lors de la connexion');
    }
};

// Exporter les fonctions pour les utiliser dans les fichiers de route
module.exports = {
    createUser,
    loginUser
    // Vous pouvez ajouter ici d'autres fonctions liées aux utilisateurs
};
