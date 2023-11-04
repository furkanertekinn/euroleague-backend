const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playercontroller');

router.delete('/deleteplayer/:id', playerController.deletePlayers);

module.exports = router;