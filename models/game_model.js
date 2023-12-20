const { client } = require('../middleware/database');

class Game {
    constructor(game_home_team, game_home_point, game_away_team, game_away_point, game_home_logo, game_away_logo, match_date) {
        this.game_home_team = game_home_team;
        this.game_home_point = game_home_point;
        this.game_away_team = game_away_team;
        this.game_away_point = game_away_point;
        this.game_home_logo = game_home_logo;
        this.game_away_logo = game_away_logo;
        this.match_date = match_date;
    }
    
    static getAllGames(callback) {
        client.query(`	SELECT 
        public."Games"."HomeTeam",
        public."Games"."HomePoint",
        public."Games"."AwayTeam",
        public."Games"."AwayPoint",
		public."Games"."HomeLogo",
		public."Games"."AwayLogo",
        public."MatchDates"."Date"
        FROM public."Games" 
        inner join public."MatchDates" 
        on public."Games"."DateId" = public."MatchDates"."Id";`, (err, res) => {
            if (err) {
                console.error('Error fetching games: ' + err);
            }
            callback(res.rows);
        });
    }
}

module.exports = Game;