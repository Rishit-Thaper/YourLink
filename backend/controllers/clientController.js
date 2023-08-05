const Client = require('../models/clientModel')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET,{expiresIn: '3d'})
}
const loginController = async(req,res)=>{
    const {email, password} = req.body;

    try{

        const client = await Client.login(email,password);
        const token = createToken(client._id);
        res.status(200).json({email, token});

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const signupController = async(req,res)=>{

    const {email, password} = req.body;

    try{

        const client = await Client.signup(email,password);
        const token = createToken(client._id);
        res.status(200).json({email, token});

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    signupController,
    loginController
}