const { client } = require('../middlware/database');

class Player {
    constructor(player_name, player_age, player_height, player_team, player_nationality, player_photo_url) {
        this.player_name = player_name;
        this.player_age = player_age;
        this.player_height = player_height;
        this.player_team = player_team;
        this.player_nationality = player_nationality;
        this.player_photo_url = player_photo_url;
    }

    static getAllPlayers(callback) {
        client.query(`Select * From public."Players"`, (err, res) => {
            if (err) {
                console.error('Error fetching players: ' + err);
            }
            callback(res.rows);
        });
    }

    static addPlayer(player) {
        const query = {
            text: 'INSERT INTO public."Players"("Name", "Age", "Height", "Team", "Nationality", "PhotoUrl") VALUES($1, $2, $3, $4, $5, $6)',
            values: [
                player.player_name,
                player.player_age,
                player.player_height,
                player.player_team,
                player.player_nationality,
                player.player_photo_url
            ]
        };

        client.query(query, (err, result) => {
            if (err) {
                console.error('Error adding player: ' + err);
            }
        });
    }

    static updatePlayer(player, playerId) {
        const query = {
            text: `UPDATE public."Players"
            SET "Name"=$1, "Age"=$2, "Height"=$3, "Team"=$4, "Nationality"=$5, "PhotoUrl"=$6 
            WHERE id=${playerId}`,
            values : [
                player.player_name,
                player.player_age,
                player.player_height,
                player.player_team,
                player.player_nationality,
                player.player_photo_url,
            ]
        };

        client.query(query, (err, result) => {
            if (err) {
                console.error('Error adding player: ' + err);
            }
        });
    }

    static deletePlayer(playerId) {

        const query = {
            text: `DELETE FROM public."Players"
            WHERE id=${playerId};`
        }

        client.query(query, (err, result) => {
            if (err) {
                console.error('Error adding player: ' + err);
            }
        });
    }
}

module.exports = Player;