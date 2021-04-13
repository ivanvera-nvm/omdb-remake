const express = require("express");
const router = express.Router();

const favController = require("../controllers/fav");
const { Fav } = require("../models");

router.get("/user/:id", favController.allFav);
router.post("/user/:id", favController.addFav);
router.delete("/:owner", favController.removeFav);


module.exports = router;
