const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { getCharById } = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const express = require('express');
const router = express.Router();

router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
router.get("/login", login);
router.get("/character/:id", getCharById);

module.exports = {
    router
}

