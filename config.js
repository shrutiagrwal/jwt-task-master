require('dotenv').config();
let JWTPrivateKey = process.env.JWT_token
let DBPath = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bmo5v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
module.exports = { JWTPrivateKey, DBPath }