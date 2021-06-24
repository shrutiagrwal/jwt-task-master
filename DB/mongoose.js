const mongoose = require('mongoose');
const { DBPath } = require('../config');

DBConnectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

function mongoDB() {
    mongoose.connect(DBPath, DBConnectionOptions)
        .then(() => {
            console.log('mongoDB connected successfully')
        })
        .catch((err) => {
            console.log('failed to connect with DataBase')
        })
}
module.exports = mongoDB;