const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playercontroller');

router.post('/addplayer', playerController.addPlayers);

module.exports = router;