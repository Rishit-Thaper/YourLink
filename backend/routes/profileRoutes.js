const express = require('express');
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

const {
    createProfile,
    getPrivateProfile,
    updateProfile,
    deleteProfile,
} = require('../controllers/profileController')

router.use(requireAuth);

router.use((req,res,next)=>{
    console.log(`PRIVATE: ${req.path}, ${req.method}`)
    next()
})

router.post("/create",createProfile);

router.get("/", getPrivateProfile);

router.patch("/update/:id", updateProfile);

router.delete("/delete/:id", deleteProfile);

module.exports = router;