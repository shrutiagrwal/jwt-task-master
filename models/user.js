const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    PhoneNo: { type: Number, required: true }
})
let user = mongoose.model('User', UserSchema)
module.exports = user;