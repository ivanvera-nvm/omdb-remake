const { User } = require("../models");

const signInController = {
  loginUser(req, res, next) {
    const { email, password } = req.body;
    UserModel.findOne({
      where: { email },
    })
      .then((user) => {
        if (!user) return res.status(401).send("User does not exist");
        user.validPassword(password).then((hash) => {
          console.log(hash);
          if (user.password !== hash)
            return res.status(401).send("Incorrect password");
          else {
            const token = jwt.sign(
              { email, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
              process.env.JWS_KEY
            );
            return res.status(200).json({ token, user });
          }
        });
      })
      .catch((e) => res.status(401).send("Auth error"));
  },
};


module.exports = signInController;