const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playercontroller');

router.put('/updateplayer/:id', playerController.updatePlayers);

module.exports = router;