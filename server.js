const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose')
const login = require('./router/login')
const user = require('./router/user')
const MongoDB = require('./DB/mongoose')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

//connect to DB
MongoDB();

//login route
app.use('/api/login', login)

//user crud
app.use('/api/user', user)


app.listen(port, () => {
    console.log('server started on port 3000')
})