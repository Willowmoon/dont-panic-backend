
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: String,
    time: Number
})

const User = mongoose.model('User',UserSchema);
module.exports = User;
