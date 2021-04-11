const { Favorite } = require("../models");

const favsController = {
  removeFav: async (req, res) => {
    const imdbID = req.body.imdbID;
    if (imdbID) res.sendStatus(400);
    try {
      const deleted = await Fav.destroy({ where: { imdbID } });
      res.status(200).send("removed");
    } catch (err) {
      res.sendStatus(500);
    }
  },

  allFav: async (req, res) => {
    const id = req.params.id;
    try {
      const favs = await Fav.findAll({ where: { owner: id } });
      res.send(favs);
    } catch (err) {
      res.send(err);
    }
  },
};

module.exports = favsController;
