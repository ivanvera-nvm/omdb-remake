const db = require("../db");

const Fav = require("./Favorite");
const User = require("./User");

User.hasMany(Fav);
Fav.belongsTo(User);

module.exports = { Fav, User };
