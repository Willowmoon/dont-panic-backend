const express = require('express');
const router = express.Router();
const Scores = require('../models/score-model');

const getAllScores = (req, res) => {
    Scores.find({}).then(score => {
        res.json(score);
    });
}

module.exports = {
    getAllScores
}