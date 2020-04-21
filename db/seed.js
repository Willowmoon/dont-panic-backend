const User = require('../models/UserModel')
const Word = require('../models/WordModel')
const userData = require('./users.json')
const wordData = require('./words.json')
const mongoose = require('./connection')

User.deleteMany({}).then(() => {
    User.collection.insertMany(userData).then(users => {
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})
Word.deleteMany({}).then(() => {
    Word.collection.insertMany(wordData).then(words => {
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})