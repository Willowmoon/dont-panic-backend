const User = require('../models/UserModel')
const userData = require('./users.json')
const mongoose = require('./connection')

User.deleteMany({}).then(() => {
    User.collection.insertMany(userData).then(users => {
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})