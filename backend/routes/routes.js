const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');

router.get('/', routeController.getRoutes);
router.post('/', routeController.createRoute);

module.exports = router;
