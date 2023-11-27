const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playercontroller');

router.get('/getplayer/:id', playerController.getPlayersId);

module.exports = router;