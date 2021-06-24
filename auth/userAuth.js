const jwt = require('jsonwebtoken')
const { JWTPrivateKey: private } = require('../config');
let auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').split(" ")[1]
        let user = await jwt.verify(token, private)
        if (!user) throw new Error
        req.user = user;
        next();
    } catch (err) {
        console.log(err)
        return res.status(401).send({ 'error': "not authenticated" })
    }
}
module.exports = auth;