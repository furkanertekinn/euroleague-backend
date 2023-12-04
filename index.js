const { connectToDatabase } = require('./middlware/database');
const express = require('express');
const app = express();
const cors = require("cors");
const getPlayerRoutes = require('./routes/get_player_routes');
const addPlayerRoutes = require('./routes/add_player_routes');
const updatePlayerRoutes = require('./routes/update_player_routes');
const deletePlayersRoutes = require('./routes/delete_player_routes');
const getPlayerByIdRoutes = require('./routes/get_player_by_id_routes');
const getGameRoutes = require('./routes/get_game_routes');

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json());

app.use('/', getPlayerRoutes);
app.use('/', addPlayerRoutes);
app.use('/', updatePlayerRoutes);
app.use('/', deletePlayersRoutes);
app.use('/', getPlayerByIdRoutes);
app.use('/', getGameRoutes);

connectToDatabase();

app.listen(3001, () => {
    console.log('Uygulama calistirildi...');
});