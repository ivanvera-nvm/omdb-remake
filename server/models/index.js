const db = require("../db");

const Fav = require("./Favorite");
const User = require("./User");

Fav.hasMany(User);
User.belongsTo(Fav)

module.exports = { Fav, User };
