const Player = require('../models/player_model');

function getPlayers(req, res) {
    Player.getAllPlayers((players) => {
        res.json(players);
    });
}

function getPlayersId(req, res) {
    const playerId = req.params.id;

    Player.getPlayersById(playerId, (error, result) => {
        if (error) {
            console.error('Error:', error);
        } else {
            res.json(result);
        }
    });
}

function addPlayers(req, res) {
    const {
        player_name, player_age, player_height, player_team, player_nationality, player_photo_url
    } = req.body;

    const newPlayer = new Player(
        player_name, player_age, player_height, player_team, player_nationality, player_photo_url
    );

    Player.addPlayer(newPlayer);
    res.send('Player added successfully');
}

function updatePlayers(req, res) {
    const playerId = req.params.id;

    const {
        player_name, player_age, player_height, player_team, player_nationality, player_photo_url
    } = req.body;

    const updatePlayer = new Player(
        player_name, player_age, player_height, player_team, player_nationality, player_photo_url
    );

    Player.updatePlayer(updatePlayer, playerId);
    res.send("Player uptaded successfully");
}

function deletePlayers(req, res) {

    const playerId = req.params.id;

    Player.deletePlayer(playerId);
    res.send("Player deleted successfully");
}

module.exports = {
    getPlayers,
    getPlayersId,
    addPlayers,
    updatePlayers,
    deletePlayers
}