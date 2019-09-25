const express = require('express');
const Movie = require('../models/movie.js');
const uploadCloud = require('../config/cloudinary.js');
const router = express.Router();

router.get('/', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('index', { movies });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get('/movie/add', (req, res, next) => {
    res.render('movie-add');
});

module.exports = router;