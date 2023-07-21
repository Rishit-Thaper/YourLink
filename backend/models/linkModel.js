const mongoose = require("mongoose");

const Schema = mongoose.Schema

const linkSchema = new Schema({
    app:{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('link', linkSchema)