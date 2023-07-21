const express = require('express')

const router = express.Router()

router.post('/login',(req, res)=>{
    res.json({msg:'Login User Route'})
})
router.post('/signup',(req, res)=>{
    res.json({msg:'Signup User Route'})
})

module.exports = router