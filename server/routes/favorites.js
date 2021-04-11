const express = require("express");
const router = express.Router();

const { Fav } = require("../models");

router.get("/users/:id/favs", (req, res) => {
  const id = req.params.id;

  Fav.findAll({ where: { owner: id } })
    .then((favs) => {
      res.send(favs);
    })
    .catch((err) => res.send(err));
});


router.put("/favs", (req, res) => {});


module.exports = router;