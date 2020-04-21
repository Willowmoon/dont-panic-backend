const Word = require('../models/WordModel')
const data = require('../db/words.json')


const getAll = (req, res) => {
    Word.find({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const createWord = (req, res) => {
    Word.create(req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const updateWord = (req, res) => {
    Word.updateOne({ _id: req.params.id }, req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const deleteWord = (req, res) => {
    Word.remove({ _id: req.params.id }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
module.exports = {
    getAll,
    createWord,
    updateWord,
    deleteWord
}