const badges = require('../data/badges.json'); // Assurez-vous que le chemin est correct

const getAllBadges = (req, res) => {
    res.status(200).json(badges);
};

const getBadgeById = (req, res) => {
    const { id } = req.params;
    const badge = badges.find(b => b.id === id);
    if (badge) {
        res.status(200).json(badge);
    } else {
        res.status(404).send('Badge non trouvé');
    }
};

module.exports = {
    getAllBadges,
    getBadgeById
};
