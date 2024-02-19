const Notification = require('../models/notification'); 
const updateNotificationSettings = async (req, res) => {
    try {
        const { receive_notifications } = req.body;
        await Notification.findOneAndUpdate({ user_id: req.user.id }, { receive_notifications }, { new: true });
        res.status(200).send('Paramètres de notification mis à jour');
    } catch (error) {
        res.status(500).send('Erreur lors de la mise à jour des paramètres de notification');
    }
};

const getNotificationsForUser = async (req, res) => {
    try {
        const notifications = await Notification.find({ user_id: req.user.id });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des notifications');
    }
};

module.exports = {
    updateNotificationSettings,
    getNotificationsForUser
};
