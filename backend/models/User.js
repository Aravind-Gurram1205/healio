const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    age: Number,
    phone_number: String,
    address: String,
    gender: String
});

module.exports = mongoose.model('User', userSchema);
