const { User } = require("../models");

const userController = {
  allUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },

  findUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByPk(id, { include: Fav });
      user ? res.send(user) : res.sendStatus(404).send("User not found");
    } catch (err) {
      res.sendStatus(500).send(err);
    }
  },

  findOrCreateFav: async (req, res) => {
    if (req.body.owner) res.sendStatus(400);
    try {
      const newFav = await Fav.create(req.body);
      res.send(fav);
    } catch (err) {
      res.sendStatus(500).send(err);
    }
  },

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
};

module.exports = userController;
