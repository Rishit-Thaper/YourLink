const express = require("express");
const router = express.Router();
const Profile = require("../models/profileModel");

const getPublicProfile = require("../controllers/publicController")


router.use((req,res,next)=>{
    console.log(`PUBLIC:${req.path}, ${req.method}`)
    next();
})
router.get("/:id",getPublicProfile);

module.exports = router;