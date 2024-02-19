const Message = require('../models/message');
const sendMessage = async (req, res) => {
    try {
        const message = new Message({
            ...req.body,
            sender_id: req.user.id 
        });
        await message.save();
        res.status(201).send('Message envoyé avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de l’envoi du message');
    }
};

const getMessagesForUser = async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [{ sender_id: req.user.id }, { receiver_id: req.user.id }]
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des messages');
    }
};

module.exports = {
    sendMessage,
    getMessagesForUser
};
