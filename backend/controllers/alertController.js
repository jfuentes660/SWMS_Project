module.exports = { 
    getAlerts: (req, res) => res.json({ message: 'Get all alerts' }), 
    createAlert: (req, res) => res.json({ message: 'Create alert', data: req.body }) 
};
