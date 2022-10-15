const express = require('express');
const router = express.Router();
const underscore = require('underscore');
const lodash= require('lodash');



const xyz = require('../logger');
const xyz2=require('../util/helper');
const xyz3=require('../validator/formatter');


router.get('/test-me', function (req, res) {
 console.log(xyz.greetings());
 console.log(xyz2.update());
 console.log(xyz3.mno(`my name is chhotu shaw`));


    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

