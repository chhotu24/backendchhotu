const express = require('express');
const router = express.Router();
const underscore = require('underscore');



const xyz = require('../logger');
const xyz2=require('../util/helper');
const xyz3=require('../validator/formatter');
const xyz4=require('./lodash')

router.get('/test-me', function (req, res) {
 console.log(xyz.greetings());
 console.log(xyz2.update());
 console.log(xyz3.mno(`     my name is chhotu shaw    `));
 console.log(xyz4.months)


    res.send('My first ever api!')

   
});












module.exports = router;

