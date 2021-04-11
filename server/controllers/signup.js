const { User } = require("../models");

const signUpController = {
  registerUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      user ? res.status(201).send(user) : res.sendStatus(500);
    } catch (e) {
      res.sendStatus(500);
    }
  },
};

module.exports = signUpController;