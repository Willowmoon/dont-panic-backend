const express = require('express')
const router = express.Router()
const scoreController = require('../controllers/cookbooks');

router.get('/', scoreController.getAllScores);

router.get('/score/:id', scoreController.getScoreById);

router.get('/user/:id', scoreController.getUserSpecificScore);

router.delete('/delete/:id', scoreController.deleteScoreById);

module.exports = router;