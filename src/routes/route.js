const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook )

router.get("/priceList", BookController.priceList)

router.get("/booksInYear", BookController.booksInYear)

router.get("/xINRBooks", BookController.xINRBooks)

router.get("/particularBooks", BookController.particularBooks)

router.get("/randomBooks", BookController.randomBooks)








module.exports = router;