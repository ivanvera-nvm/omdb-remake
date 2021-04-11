const { User } = require("../models");

const signUpController = {
  registerUser: async (req, res) => {
    console.log(req.body)
    try {
      const user = await User.create(req.body);
      user ? res.send(user) : res.sendStatus(500);
    } catch (e) {
      res.sendStatus(404);
    }
  },
};

module.exports = signUpController;
