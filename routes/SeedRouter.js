const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const WordController = require('../controllers/WordController')

router.get('/seedWord', WordController.seedDatabase)
router.get('/seedUser', UserController.seedDatabase)

module.exports = router