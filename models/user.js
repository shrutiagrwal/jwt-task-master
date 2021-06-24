const mongoose = require('mongoose');


let UserSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    PhoneNo: { type: Number, required: true }
})
let User = mongoose.model('User', UserSchema)
let EmailValidation = (email) => {
    console.log(email)
    const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (email.match(validRegex))
        return true;
    return false;
}
module.exports = { User, EmailValidation };