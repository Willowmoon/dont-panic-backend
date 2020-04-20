const express = require('express');
const router = express.Router();
const Users = require('../models/score-model');

const createNewUser = (req, res) => {
    Users.find({}).then(score => {
        res.json(score);
    });
}

const deleteUserScore = (req, res) => {
    Users.find({}).then(score => {
        res.json(score);
    });
}

module.exports = {
    createNewUser,
    deleteUserScore
}