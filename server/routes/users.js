const express = require("express");
const router = express.Router();

const { User, Fav } = require("../models");

router.get("/");

router.get("/:id");

router.post("/:id/favs");

router.delete("/:id/favs");

router.post("/register");

module.exports = router;
