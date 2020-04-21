const mongoose = require('../db/connection')
const User = require('../models/UserModel')
const data = require('../db/users.json')

const seedDatabase = (req, res) => {
    User.deleteMany({}).then(() => {
        User.collection.insert(data).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(data)
        })
    }).then(() => {
        mongoose.connection.close()
    })   
}
const getAll = (req, res) => {
    User.find({}).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        }).then(() => {
        mongoose.connection.close()
    })   
}
const createUser = (req, res) => {
    User.create(req.body).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        }).then(() => {
        mongoose.connection.close()
    })   
}
const updateUser = (req, res) => {
    User.updateOne({_id: req.params.id}, req.body).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        }).then(() => {
        mongoose.connection.close()
    })   
}
const deleteUser = (req, res) => {
    User.remove({_id: req.params.id}).then(data => {
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
    createUser, 
    updateUser,
    deleteUser
}