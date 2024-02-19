const User = require('../models/user'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Créer un nouvel utilisateur
const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Un utilisateur existe déjà avec cet email');
        }

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

// Récupérer les informations d'un utilisateur
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération de l’utilisateur');
    }
};

// Mettre à jour les informations d'un utilisateur
const updateUser = async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Erreur lors de la mise à jour de l’utilisateur');
    }
};

// Supprimer un utilisateur
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.status(200).send('Utilisateur supprimé avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de la suppression de l’utilisateur');
    }
};


module.exports = {
    createUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser
};
