const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController');

router.get('/', UserController.getAll)
router.post('/create', UserController.createUser)
router.put('/update/:id', UserController.updateUser)
router.delete('/delete/:id', UserController.deleteUser)
module.exports = router