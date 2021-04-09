const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _userName: String,
    _email: String,
    _password: String
}, {
    versionKey: false,
});

const User = mongoose.model("news_users", schema);

module.exports = User