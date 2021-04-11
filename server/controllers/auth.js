const authController = {
  authorized: async (req, res, next) => {
    const email = req.user.email;
    try {
      const user = await User.findOne({ where: { email } });
      user
        ? res.status(200).json(user)
        : res.sendStatus(404).send("User not found");
    } catch {
      next();
    }
  },
};

module.exports = authController;
