const S = require("sequelize");
const db = require("../db");

const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    name: { type: S.STRING, allowNull: false },
    lastName: { type: S.STRING, allowNull: false },
    email: { type: S.STRING, allowNull: false, unique: true },
    password: { type: S.STRING, allowNull: false },
    salt: { type: S.DataTypes.STRING },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(16);
  user.salt = salt;
  const hash = await user.hash(user.password, salt);
  user.password = hash;
});

User.prototype.validPassword = function (loginPassword) {
  const salt = this.salt;
  return bcrypt.hash(loginPassword, this.salt);
};

module.exports = User;
