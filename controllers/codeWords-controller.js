const express = require('express');
const router = express.Router();
const codeWords = require('../models/codeWords');


const getAllCodeWords = (req, res) => {
    codeWords.find({}).then(word => {
        res.json(word);
    });
}

const getCodeWordsByIndex = (req, res) => {
    codeWords.findById(req.params.id).then(word => {
        res.json(word);
    });
}

const createCodeWords = (req, res) => {
    const codeWord = req.body;
    codeWords.create(codeWord).then(word  =>{
       res.json(word);
    });
}

const updateCodeWordsByIndex = (req, res) => {
    codeWords.findByIdAndUpdate(req.params.id).then(word => {
        res.json(word);
    });
}

const deleteCodeWordsByIndex = (req, res) => {
    codeWords.findByIdAndDelete(req.params.id).then(word => {
        res.json(word);
    });
}

module.exports = {
    getAllCodeWords,
    getCodeWordsByIndex,
    createCodeWords,
    updateCodeWordsByIndex,
    deleteCodeWordsByIndex
    
}