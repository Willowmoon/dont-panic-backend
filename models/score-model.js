//import connection
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
const users = require('./user-model');

const scoreSchema = new Schema ({
    user: [userSchema],
    score: Number
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;