const { Favorite, User, Fav } = require("../models");

const favsController = {
  addFav: async (req, res) => {
    if (req.body.owner === null) {
      res.sendStatus(400);
    } else {
      Fav.create(req.body)
        .then((fav) => {
          res.send(fav);
        })
        .catch((err) => res.send(err));
    }
  },

  removeFav: async (req, res) => {
    console.log('delete route', req.body)
    const imdbID = req.body.data
    const owner = req.params.owner

    if (!imdbID) return res.sendStatus(400);
    try {
      const deleted = await Fav.destroy({ where: { imdbID, owner } });
      res.status(200).send("removed");
    } catch (err) {
      console.log(err)
      res.sendStatus(500);
    }
  },

  allFav: async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    try {
      const favs = await Fav.findAll({ where: { owner: userId } });
      favs ? res.status(200).send(favs) : res.sendStatus(404);
    } catch (err) {
      res.status(404).send(err);
    }
  },
};

module.exports = favsController;
