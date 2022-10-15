const express = require('express');
const router = express.Router();
const underscore = require('underscore')
const xyz = require('../logger')


router.get('/test-me', function (req, res) {
 console.log(xyz.greetings())


    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

