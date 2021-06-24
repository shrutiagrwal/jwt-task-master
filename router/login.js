const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const User = require('../models/user')
const { JWTPrivateKey: private } = require('../config');
const router = express.Router();

router.post('/', async(req, res) => {
    let Email = req.body.Email
    let Password = req.body.Password
    if (!Email || Email.length === 0)
        return res.status(400).send({ 'error': "Email ID not provided", "data": null })
    if (!Password || Password.length === 0)
        return res.status(400).send({ 'error': "password not provided", "data": null })
    let user = await User.find({ Email });
    if (!user || user.length === 0)
        return res.status(404).send({ 'error': `Email doesn't exist`, 'data': null })
    if (user[0].Password !== Password)
        return res.status(404).send({ 'error': `Incorrect password`, 'data': null })
    let payload = { Email }

    try {
        let accesstoken = jwt.sign(payload, private)
        res.status(201).append('Authorization', `Bearer ${accesstoken}`).send({ 'error': null, 'data': user, 'jwt-token': `Bearer ${accesstoken}` })
    } catch (err) {
        res.status(400).send({ 'error': 'auth error', 'data': null })
    }
})
module.exports = router