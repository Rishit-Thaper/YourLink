const mongoose = require("mongoose");
const Schema = mongoose.Schema

const profileSchema = new Schema({
    
    user_id:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    bio:{
        type: String,
        required: true,
    },
    wtsp:{
        type:String,
    },
    fb:{
        type: String,
    },
    insta:{
        type: String,
    },
    twitter:{
        type: String,
    },
    link:{
        type:String,
    },
    git:{
        type:String,
    },
    link1:{
        type: String,
    },
    link2:{
        type: String,
    },
    link3:{
        type: String,
    }
})

module.exports = mongoose.model('profile', profileSchema)