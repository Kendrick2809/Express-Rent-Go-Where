const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller')

//Routes
router.get('/call', controller.call)
router.get('/', controller.homepage)

module.exports = router 