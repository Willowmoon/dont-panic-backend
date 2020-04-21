const express = require('express')
const router = express.Router()
const WordController = require('../controllers/WordController');

router.get('/', WordController.getAll)
router.post('/create', WordController.createWord)
router.put('/update/:id', WordController.updateWord)
router.delete('/delete/:id', WordController.deleteWord)
module.exports = router