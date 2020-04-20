//import connection
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const wordSchema = new Schema ({
    word: String,
    difficulty: String,
});

const codeWords = mongoose.model("codeWords", wordSchema);

module.exports = codeWords;