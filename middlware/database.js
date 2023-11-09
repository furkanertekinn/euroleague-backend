const { Client } = require('pg');
const dbConfig = require('../config/dbconfig');

const client = new Client(dbConfig);

const connectToDatabase = () => {
    client.connect(function (err) {
        if (err) throw err;
        console.log("Connected to the database!");
    });
}

module.exports = {
    client,
    connectToDatabase
};