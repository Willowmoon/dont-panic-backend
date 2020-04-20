const express = require('express')
const router = express.Router()
const gameController = require('../controllers/game-controller');

router.put('/:id', gameController.createNewUser); // or post.

router.delete('/delete/:id', gameController.deleteUserScore);

module.exports = router;