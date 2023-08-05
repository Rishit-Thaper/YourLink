const express = require('express')
const router = express.Router()
const {
    signupController,
    loginController
} = require('../controllers/clientController')

router.post('/login', loginController)
router.post('/signup', signupController)

module.exports = router