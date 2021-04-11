const express = require("express");
const router = express.Router();
const favs = require("./favorites");
const users = require("./users");

router.use("/users", users);
router.use("/favs", favs)

module.exports = router;
