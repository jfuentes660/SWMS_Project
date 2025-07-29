const express = require('express');
const router = express.Router();
const binController = require('../controllers/binController');

router.get('/', binController.getBins);
router.post('/', binController.createBin);

module.exports = router;
