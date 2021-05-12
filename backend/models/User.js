const { Schema, model } = require('mongoose')

const userSchema = new Schema({

    imageUrl: String,
    name: String,
    googleId: String,
    user: String,
    pass: String,

})

const User = model('User', userSchema)

module.exports = User