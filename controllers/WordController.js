const mongoose = require('../db/connection')
const Word = require('../models/WordModel')
const data = require('../db/words.json')

const seedDatabase = (req, res) => {
    Word.deleteMany({}).then(() => {
        Word.collection.insert(data).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(data)
        })
    }).then(() => {
        mongoose.connection.close()
    })   
}
const getAll = (req, res) => {
    Word.find({}).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        }).then(() => {
        mongoose.connection.close()
    })   
}
const createWord = (req, res) => {
    Word.create(req.body).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        }).then(() => {
        mongoose.connection.close()
    })   
}
const updateWord = (req, res) => {
    Word.updateOne({_id: req.params.id}, req.body).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        }).then(() => {
        mongoose.connection.close()
    })   
}
const deleteWord = (req, res) => {
    Word.remove({_id: req.params.id}).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        }).then(() => {
        mongoose.connection.close()
    })   
}
module.exports = {
    seedDatabase,
    getAll,
    createWord, 
    updateWord,
    deleteWord
}