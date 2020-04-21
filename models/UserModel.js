const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    user: String,
    score: Number
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;