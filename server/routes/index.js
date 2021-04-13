const express = require("express");
const router = express.Router();
const favs = require("./favorites");
const users = require("./users");
const me = require('./me')

router.use("/user", users);
router.use("/fav", favs)
router.use('/me', me)
module.exports = router;
