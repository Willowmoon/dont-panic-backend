const express = require('express')
const router = express.Router()
const gameController = require('../controllers/game-controller');
const codeWordsController

router.put('/:id', gameController.createNewUser); // or post.

router.delete('/delete/:id', gameController.deleteUserScore);

router.get('/codewords', )


module.exports = router;