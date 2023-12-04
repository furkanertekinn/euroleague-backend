const { client } = require('../middlware/database');

class Game {
    constructor(game_home, game_home_number, game_away, game_away_number, game_date_id) {
        this.game_home = game_home;
        this.game_home_number = game_home_number;
        this.game_away = game_away;
        this.game_away_number = game_away_number;
        this.game_date_id = game_date_id;
    }
    static getAllGames(callback) {
        client.query(`Select * From public."Games"`, (err, res) => {
            if (err) {
                console.error('Error fetching games: ' + err);
            }
            callback(res.rows);
        });
    }
}

module.exports = Game;