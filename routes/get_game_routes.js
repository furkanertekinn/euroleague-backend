const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gamecontroller');

router.get('/games', gameController.getGames);

module.exports = router;