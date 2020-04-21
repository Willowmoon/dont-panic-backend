const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const wordSchema = new Schema ({
    word: String,
    difficulty: String,
});

const WordModel = mongoose.model("Word", wordSchema);

module.exports = WordModel;