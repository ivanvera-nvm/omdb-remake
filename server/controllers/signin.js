const { User } = require("../models");
const jwt = require("jsonwebtoken");

const signInController = {
  async loginUser(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    try {
      
      if (!user) return res.status(401).send("User does not exist");
      user.validPassword(password).then((hash) => {
        console.log(hash);
      if (user.password !== hash) res.status(401).send("Incorrect password");
        else {
          const token = jwt.sign(
            { email, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
            process.env.JWT_KEY
          );
          return res.status(200).json({ token });
        }
      });
    } catch (e) {
      return res.status(401).send("Auth error");
    }
  },
};

module.exports = signInController;
