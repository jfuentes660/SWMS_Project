module.exports = { 
    getRoutes: (req, res) => res.json({ message: 'Get all routes' }), 
    createRoute: (req, res) => res.json({ message: 'Create route', data: req.body }) 
};
