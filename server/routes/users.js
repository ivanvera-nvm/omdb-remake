const express = require("express");
const router = express.Router();
const register = require('../controllers/signup')
const login = require('../controllers/signin')
const userController = require('../controllers/user')
const { User, Fav } = require("../models");

router.get("/", userController.allUsers);

router.get("/:id", userController.findUser);

router.post("/:id/favs", userController.findOrCreateFav);

router.post("/login", login.loginUser);
router.post("/register", register.registerUser);

module.exports = router;
