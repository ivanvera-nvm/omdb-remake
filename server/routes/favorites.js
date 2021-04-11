const express = require("express");
const router = express.Router();

const favController = require("../controllers/fav");
const { Fav } = require("../models");

router.get("/users/:id/favs", favController.allFav);

router.delete("/:id/favs", favController.removeFav);

router.put("/favs", (req, res) => {});

module.exports = router;
