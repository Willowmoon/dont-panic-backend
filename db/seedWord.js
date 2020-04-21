const Word = require('../models/WordModel')
const wordData = require('./words.json')
const mongoose = require('./connection')

Word.deleteMany({}).then(() => {
    Word.collection.insertMany(wordData).then(words => {
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})