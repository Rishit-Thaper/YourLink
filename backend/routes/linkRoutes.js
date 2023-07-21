const express = require('express');

const router = express.Router()
const {addLink, deleteLink, updateLink, getLink} = require('../controllers/linkController')

router.get('/',getLink)
router.post('/',addLink)
router.delete('/:id',deleteLink)

router.patch('/:id',updateLink)

module.exports = router