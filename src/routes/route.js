const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",userController.createUser)

router.post("/login",userController.loginUser)

router.post("/login2",userController.loginUser2)

router.post("/login3",userController.loginUser3)





router.get("/users/:userId",userController.getUser)
router.put("/users/:userId",userController.updateUser2)

router.delete("/user/:userId",userController.deleteUser)


//The userId is sent by front end
//router.get("/users/:userId", userController.getUserData)

//router.put("/users/:userId", userController.updateUser)

module.exports = router;




//router.post("/login", userController.loginUser)
//router.post("/users", userController.createUser  )