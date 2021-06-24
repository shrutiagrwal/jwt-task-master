const express = require('express');
const { Error } = require('mongoose');
const auth = require('../auth/userAuth');
const router = express.Router();
const { User, EmailValidation } = require('../models/user')
require('dotenv').config()
    //get all users
router.get('/all', async(req, res) => {
    let user = await User.find();
    return res.send({ 'error': 'null', 'data': user })
})

//get details of logged in user
router.get('/', auth, async(req, res) => {
    let Email = req.user.Email;
    try {
        let user = await User.find({ Email });
        if (user.length == 0)
            throw new Error(`user doesn't exist`)
        return res.status(200).send({ 'error': null, 'data': user })
    } catch (err) {
        return res.send({ 'error': err.message, 'data': null })
    }
})


//create a new user
router.post('/create', async(req, res) => {
    let user = new User(req.body);
    try {
        //check if user with email id already exist
        let check = await User.find({ Email: user.Email });
        if (check.length !== 0)
            throw new Error('Email ID already exist');
        if (!EmailValidation(user.Email))
            throw new Error('Invalid Email')

        else {
            await user.save();
            return res.status(200).send({ 'error': "user created successfully", 'data': user });
        }
    } catch (err) {
        return res.send({ 'error': err.message, 'data': 'null' })
    }
})

//update user
router.put('/update', auth, async(req, res) => {
    let Email = req.user.Email;
    let UpdatedData = req.body;
    try {
        let user = await User.find({ Email })
        if (user.length === 0)
            throw new Error(`User doesn't exist`)
        if (UpdatedData.Email != null)
            throw new Error('email id cannot be updated')
        user = await User.findOneAndUpdate({ Email }, UpdatedData, { new: true })
        res.status(200).send({ error: null, data: user })
    } catch (err) {
        console.log(err)
        res.status(400).send({ error: err.message, data: null })
    }
})

//delete user
router.delete('/delete', auth, async(req, res) => {
    let Email = req.user.Email;
    try {
        let user = await User.find({ Email });
        if (user.length === 0)
            throw new Error(`User doesn't exist`)
        user = await User.deleteOne({ Email })
        return res.status(200).send({ error: null, data: user })
    } catch (err) {
        return res.status(400).send({ error: err.message, data: null })
    }
})

module.exports = router