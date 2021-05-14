const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

const listSchema = new Schema({

    button: String,
    item: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
})

const List = model('List', listSchema)

module.exports = List