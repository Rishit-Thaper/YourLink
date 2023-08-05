const mongoose = require('mongoose')
const Profile = require('../models/profileModel')

const createProfile = async(req, res) =>{
    
    const {
            name, 
            email, 
            bio, 
            wtsp, 
            fb, 
            insta, 
            twitter, 
            link, 
            git, 
            link1, 
            link2, 
            link3
        } = req.body;
    
    try{

        const user_id = req.user._id;    
        const profile = await Profile.create({ user_id, name, email, bio, wtsp, fb, insta, twitter, link, git, link1, link2, link3 })
        res.status(200).json(profile);
    }catch(error){
        res.status(400).json(error);
    }   
}


const getPrivateProfile = async(req,res)=>{

    const user_id = req.user._id; // Assuming req.user._id contains the authenticated user's ID

    const profile = await Profile.findOne({ user_id }); // Using findOne instead of findById

    if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json(profile);
}

const updateProfile = async(req,res) =>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(400).json({error:"invalid id"})
    }

    const profile = await Profile.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if(!profile){
        return res.status(400).json({error:"Profile dont exist"})
    }

    res.status(200).json(profile);
}   

const deleteProfile = async(req, res) =>{
    
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(400).json({error:"invalid id"})
    }

    const profile = await Profile.findByIdAndDelete({_id: id});
    
    if(!profile){
        return res.status(400).json({error:"Profile dont exist"})    
    }

    res.status(200).json(profile);
    
}

module.exports ={
    createProfile,
    getPrivateProfile,
    updateProfile,
    deleteProfile,
}