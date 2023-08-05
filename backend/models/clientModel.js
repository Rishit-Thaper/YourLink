const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema

const clientSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
})

clientSchema.statics.signup = async function(email, password){

    if(!email || !password){
        throw Error("Please fill all details");
    }
    if(!validator.isEmail(email)){
        throw Error("Email not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Please Enter strong password");
    }
    
    const exists = await this.findOne({email});

    if(exists){
        throw Error("User Already Exists");
    }

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);

    const client = await this.create({email, password: hash});

    return client;
}

clientSchema.statics.login = async function(email, password){
    
    if(!email || !password){
        throw Error("Please fill all details");
    }
    
    const user = await this.findOne({email});

    if(!user){
        throw Error("User don't exist! Please Register");
    }

    const match = await bcrypt.compare(password, user.password);

    if(match){
        return user
    }else{
        throw Error("Incorrect Login Credentials")
    }
}

module.exports = mongoose.model('client', clientSchema)

