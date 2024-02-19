const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUser, updateUser, deleteUser } = require('../controllers/userController');

// Définition des routes pour les utilisateurs
router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/me', getUser);
router.put('/me', updateUser);
router.delete('/me', deleteUser);

module.exports = router;
