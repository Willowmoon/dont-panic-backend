const User = require('../models/UserModel')
const data = require('../db/users.json')

const getAll = (req, res) => {
    User.find({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const createUser = (req, res) => {
    User.create(req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const updateUser = (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const deleteUser = (req, res) => {
    User.remove({ _id: req.params.id }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
module.exports = {
    getAll,
    createUser,
    updateUser,
    deleteUser
}