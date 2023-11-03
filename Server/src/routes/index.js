const { postFav } = require('../controllers/postFav');
const { postUser } = require("../controllers/postUser");
const { deleteFav } = require("../controllers/deleteFav");
const { getCharById } = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const express = require('express');
const router = express.Router();

router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
router.get("/login", login);
router.post("/login", postUser)
router.get("/character/:id", getCharById);

module.exports = {
    router
}

