const mongoose = require('mongoose')

const Link = require('../models/linkModel')

const getLink = async(req,res) =>{

    const {id} = req.params;

    const links = await Link.find({id})

    res.status(200).json(links)
}

const addLink = async(req, res)=>{

    const { app, link } = req.body;

    try{
        const addedLink = await Link.create({app, link})
        res.status(200).json(addedLink)
    }catch(error){
        res.status(400).json({error: error})
    }

}

const deleteLink = async(req,res) =>{
    
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: "Invalid"})
    }
    
    const link = await Link.findByIdAndDelete({_id:id})
    
    if(!link){
        res.status(400).json({error: 'Delete Invalid'})
    }
    
    res.status(200).json(link);

}

const updateLink = async(req,res)=>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: "Invalid"})
    }

    const updatedLink = await Link.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    
    if(!updatedLink){
        res.status(400).json({error: "Update failed"})
    }

    res.status(200).json(updatedLink);
}
module.exports = {
    addLink,
    deleteLink,
    updateLink,
    getLink
}