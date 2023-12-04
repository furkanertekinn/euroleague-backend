const Game = require('../models/game_model');

function getGames(req, res) {
    Game.getAllGames((games) => {
        res.json(games);
    });
}

module.exports = {
    getGames
}