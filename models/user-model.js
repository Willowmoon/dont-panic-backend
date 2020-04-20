//import connection
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    time: String,
    level: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;